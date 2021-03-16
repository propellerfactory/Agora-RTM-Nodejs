"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgoraRtmChannel = void 0;
const events_1 = __importDefault(require("events"));
const AgoraRTM = __importStar(require("./rtm"));
const mutex_1 = __importDefault(require("./mutex"));
class AgoraRtmChannel extends events_1.default {
    constructor(channel) {
        super();
        this.subscribeEvents = () => {
            this.channel.onEvent("JoinSuccess", () => {
                this.fire("JoinSuccess");
            });
            this.channel.onEvent("JoinFailure", (ecode) => {
                this.fire("JoinFailure", ecode);
            });
            this.channel.onEvent("SendMessageState", (msgid, state) => {
                this.fire("SendMessageState", msgid, state);
            });
            this.channel.onEvent("MessageReceived", (userid, msg) => {
                this.fire("MessageReceived", userid, msg);
            });
            this.channel.onEvent("MemberJoined", (userid, channelid) => {
                this.fire("MemberJoined", userid, channelid);
            });
            this.channel.onEvent("MemberLeft", (userid, channelid) => {
                this.fire("MemberLeft", userid, channelid);
            });
            this.channel.onEvent("GetMembers", (members, ecode) => {
                this.fire("GetMembers", members, ecode);
            });
            this.channel.onEvent("LeaveChannel", (ecode) => {
                this.fire("LeaveChannel", ecode);
            });
        };
        this.channel = channel;
        this.mutex = new mutex_1.default();
        this.subscribeEvents();
    }
    fire(event, ...args) {
        setImmediate(() => {
            this.emit(event, ...args);
        });
    }
    join() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mutex.wait("join");
                this.mutex.lock("join");
                this.channel.join();
                // if (!this.channel.join()) {
                //   this.mutex.unlock("join");
                //   reject(new Error(`Execute 'join' and return false`));
                // }
                this.once("JoinSuccess", () => {
                    this.mutex.unlock("join");
                    resolve();
                });
                this.once("JoinFailure", (ecode) => {
                    this.mutex.unlock("join");
                    reject(ecode);
                });
            }
            catch (err) {
                this.mutex.unlock("join");
                reject(err);
            }
        }));
    }
    leave() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mutex.wait("leave");
                this.mutex.lock("leave");
                this.channel.leave();
                // if (!this.channel.leave()) {
                //   this.mutex.unlock("leave");
                //   reject(new Error(`Execute 'leave' and return false`));
                // }
                this.once("LeaveChannel", () => {
                    this.mutex.unlock("leave");
                    resolve();
                });
            }
            catch (err) {
                this.mutex.unlock("leave");
                reject(err);
            }
        }));
    }
    release() {
        return this.channel.release();
    }
    sendMessage(message) {
        return this.channel.sendMessage(message || "");
    }
    getMembers() {
        return this.channel.getMembers();
    }
}
exports.AgoraRtmChannel = AgoraRtmChannel;
class AgoraRtmSDK extends events_1.default {
    constructor() {
        super();
        this.subscribeEvents = () => {
            this.sdk.onEvent("LoginSuccess", () => {
                this.fire("LoginSuccess");
            });
            this.sdk.onEvent("LoginFailure", (ecode) => {
                this.fire("LoginFailure", ecode);
            });
            this.sdk.onEvent("MessageReceivedFromPeer", (peerId, message) => {
                this.fire("MessageReceivedFromPeer", peerId, message);
            });
            this.sdk.onEvent("Logout", (ecode) => {
                this.fire("Logout", ecode);
            });
            this.sdk.onEvent("ConnectionStateChanged", (state, code) => {
                this.fire("ConnectionStateChanged", state, code);
            });
            this.sdk.onEvent("RenewTokenResult", (token, ecode) => {
                this.fire("RenewTokenResult", token, ecode);
            });
            this.sdk.onEvent("TokenExpired", () => {
                this.fire("TokenExpired");
            });
            this.sdk.onEvent("SendMessageState", (messageId, state) => {
                this.fire("SendMessageState", messageId, state);
            });
            this.sdk.onEvent("QueryPeersOnlineStatusResult", (requestId, peersStatus, errorCode) => {
                this.fire("QueryPeersOnlineStatusResult", requestId, peersStatus, errorCode);
            });
        };
        this.sdk = AgoraRTM.createInstance();
        this.mutex = new mutex_1.default();
        this.subscribeEvents();
    }
    fire(event, ...args) {
        setImmediate(() => {
            this.emit(event, ...args);
        });
    }
    initialize(appid) {
        return this.sdk.initialize(appid);
    }
    login(token, account) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mutex.wait("login");
                this.mutex.lock("login");
                this.sdk.login(token, account);
                // if (!this.sdk.login(appid, account)) {
                //   this.mutex.unlock("login");
                //   reject(new Error(`Execute 'login' and return false`));
                // }
                this.once("LoginSuccess", () => {
                    this.mutex.unlock("login");
                    resolve();
                });
                this.once("LoginFailure", (ecode) => {
                    this.mutex.unlock("login");
                    reject(ecode);
                });
            }
            catch (err) {
                this.mutex.unlock("login");
                reject(err);
            }
        }));
    }
    logout() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.mutex.wait("logout");
                this.mutex.lock("logout");
                this.sdk.logout();
                // if (!this.sdk.logout()) {
                //   this.mutex.unlock("logout");
                //   reject(new Error(`Execute 'logout' and return false`));
                // }
                this.once("Logout", () => {
                    this.mutex.unlock("logout");
                    resolve();
                });
            }
            catch (err) {
                this.mutex.unlock("logout");
                reject(err);
            }
        }));
    }
    renewToken(token) {
        return this.sdk.renewToken(token || "");
    }
    setLogFile(filePath) {
        return this.sdk.setLogFile(filePath || "");
    }
    setLogFileSize(fileSize) {
        return this.sdk.setLogFileSize(fileSize || 1024);
    }
    sendMessageToPeer(peerId, message) {
        return this.sdk.sendMessageToPeer(peerId || "", message || "");
    }
    createChannel(cname) {
        let channel = this.sdk.createChannel(cname || "");
        if (channel === null) {
            return null;
        }
        return new AgoraRtmChannel(channel);
    }
    setParameters(param) {
        return this.sdk.setParameters(param || "");
    }
    queryPeersOnlineStatus(peerIds) {
        return this.sdk.queryPeersOnlineStatus(peerIds || []);
    }
}
exports.default = AgoraRtmSDK;
