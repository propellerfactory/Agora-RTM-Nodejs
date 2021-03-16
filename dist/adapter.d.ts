/// <reference types="node" />
import EventEmitter from "events";
import * as AgoraRTM from "./rtm";
export declare class AgoraRtmChannel extends EventEmitter {
    private channel;
    private mutex;
    constructor(channel: AgoraRTM.RTMChannel);
    fire(event: string, ...args: any[]): void;
    join(): Promise<void>;
    leave(): Promise<void>;
    release(): void;
    sendMessage(message: string): number;
    getMembers(): number;
    private subscribeEvents;
}
declare class AgoraRtmSDK extends EventEmitter {
    private sdk;
    private mutex;
    constructor();
    fire(event: string, ...args: any[]): void;
    initialize(appid: string): number;
    login(token: string | null, account: string): Promise<void>;
    logout(): Promise<void>;
    renewToken(token: string): number;
    setLogFile(filePath: string): number;
    setLogFileSize(fileSize: number): number;
    sendMessageToPeer(peerId: string, message: string): boolean;
    createChannel(cname: string): AgoraRtmChannel | null;
    setParameters(param: string): number;
    queryPeersOnlineStatus(peerIds: string[]): number;
    private subscribeEvents;
}
export default AgoraRtmSDK;
