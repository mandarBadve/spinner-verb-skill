export type MergeMode = "append" | "replace";

export interface SpinnerVerbInput {
  verbs?: string[];
  mode?: MergeMode;
  seed?: number;
}

export interface SpinnerVerbOutput {
  verb: string;
}
