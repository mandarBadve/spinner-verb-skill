import { MergeMode } from "./types";
export declare const DEFAULT_VERBS: readonly ["Analyzing", "Building", "Calculating", "Checking", "Compiling", "Crafting", "Debugging", "Evaluating", "Generating", "Inspecting", "Loading", "Optimizing", "Preparing", "Processing", "Reviewing", "Running", "Scanning", "Syncing", "Testing", "Validating"];
export declare class SpinnerVerbs {
    private readonly verbs;
    constructor(customVerbs?: string[], mode?: MergeMode);
    static buildVerbPool(customVerbs?: string[], mode?: MergeMode): string[];
    getVerbs(): string[];
    pick(seed?: number): string;
}
