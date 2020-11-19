import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class MuscleGroup {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly exercises?: (Exercise | null)[];
  constructor(init: ModelInit<MuscleGroup>);
  static copyOf(source: MuscleGroup, mutator: (draft: MutableModel<MuscleGroup>) => MutableModel<MuscleGroup> | void): MuscleGroup;
}

export declare class Exercise {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly videoUrl?: string;
  readonly imageUrl?: string;
  readonly muscleGroup?: MuscleGroup;
  constructor(init: ModelInit<Exercise>);
  static copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}