// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MuscleGroup, Exercise } = initSchema(schema);

export {
  MuscleGroup,
  Exercise
};