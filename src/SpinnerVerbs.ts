import { MergeMode } from "./types";

export const DEFAULT_VERBS = [
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
] as const;

export class SpinnerVerbs {
  private readonly verbs: string[];

  constructor(customVerbs: string[] = [], mode: MergeMode = "append") {
    this.verbs = SpinnerVerbs.buildVerbPool(customVerbs, mode);
  }

  static buildVerbPool(customVerbs: string[] = [], mode: MergeMode = "append"): string[] {
    const sanitizedCustomVerbs = customVerbs
      .map((verb) => verb.trim())
      .filter((verb) => verb.length > 0);

    if (mode === "replace" && sanitizedCustomVerbs.length > 0) {
      return sanitizedCustomVerbs;
    }

    if (mode === "append" && sanitizedCustomVerbs.length > 0) {
      return [...DEFAULT_VERBS, ...sanitizedCustomVerbs];
    }

    return [...DEFAULT_VERBS];
  }

  getVerbs(): string[] {
    return [...this.verbs];
  }

  pick(seed?: number): string {
    if (this.verbs.length === 0) {
      return DEFAULT_VERBS[0];
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
