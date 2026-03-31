"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerVerbs = void 0;
exports.run = run;
const SpinnerVerbs_1 = require("./SpinnerVerbs");
function run(input = {}) {
    const spinnerVerbs = new SpinnerVerbs_1.SpinnerVerbs(input.verbs ?? [], input.mode ?? "append");
    return {
        verb: spinnerVerbs.pick(input.seed)
    };
}
var SpinnerVerbs_2 = require("./SpinnerVerbs");
Object.defineProperty(exports, "SpinnerVerbs", { enumerable: true, get: function () { return SpinnerVerbs_2.SpinnerVerbs; } });
__exportStar(require("./types"), exports);
