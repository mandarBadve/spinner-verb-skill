import { SpinnerVerbs } from "./SpinnerVerbs";
import { SpinnerVerbInput, SpinnerVerbOutput } from "./types";

export function run(input: SpinnerVerbInput = {}): SpinnerVerbOutput {
  const spinnerVerbs = new SpinnerVerbs(input.verbs ?? [], input.mode ?? "append");

  return {
    verb: spinnerVerbs.pick(input.seed)
  };
}

export { SpinnerVerbs } from "./SpinnerVerbs";
export * from "./types";
