"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstance = void 0;
const RTMServerController = require("../build/Release/agorasdk")
    .RtmServerController;
const createInstance = () => {
    return new RTMServerController();
};
exports.createInstance = createInstance;
