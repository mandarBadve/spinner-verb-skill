"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinnerVerbs = exports.DEFAULT_VERBS = void 0;
exports.DEFAULT_VERBS = [
    "Analyzing",
    "Building",
    "Calculating",
    "Checking",
    "Compiling",
    "Crafting",
    "Debugging",
    "Evaluating",
    "Generating",
    "Inspecting",
    "Loading",
    "Optimizing",
    "Preparing",
    "Processing",
    "Reviewing",
    "Running",
    "Scanning",
    "Syncing",
    "Testing",
    "Validating"
];
class SpinnerVerbs {
    constructor(customVerbs = [], mode = "append") {
        this.verbs = SpinnerVerbs.buildVerbPool(customVerbs, mode);
    }
    static buildVerbPool(customVerbs = [], mode = "append") {
        const sanitizedCustomVerbs = customVerbs
            .map((verb) => verb.trim())
            .filter((verb) => verb.length > 0);
        if (mode === "replace" && sanitizedCustomVerbs.length > 0) {
            return sanitizedCustomVerbs;
        }
        if (mode === "append" && sanitizedCustomVerbs.length > 0) {
            return [...exports.DEFAULT_VERBS, ...sanitizedCustomVerbs];
        }
        return [...exports.DEFAULT_VERBS];
    }
    getVerbs() {
        return [...this.verbs];
    }
    pick(seed) {
        if (this.verbs.length === 0) {
            return exports.DEFAULT_VERBS[0];
        }
        if (typeof seed === "number" && Number.isFinite(seed)) {
            const normalizedSeed = Math.trunc(seed);
            const index = Math.abs(normalizedSeed) % this.verbs.length;
            return this.verbs[index];
        }
        const index = Math.floor(Math.random() * this.verbs.length);
        return this.verbs[index];
    }
}
exports.SpinnerVerbs = SpinnerVerbs;
