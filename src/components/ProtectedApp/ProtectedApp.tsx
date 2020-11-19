import React, {useEffect} from 'react';
import {API} from "aws-amplify";
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';
import {CreateExerciseInput, CreateMuscleGroupInput, ListMuscleGroupsQuery} from "../../API";

type ProtectedAppProps = {
    children: React.ReactNode | null
};
const initialMuscleGroups: Array<string> = ["Abs", "Arms", "Back", "Chest", "Legs", "Shoulders"];

export const ProtectedApp: React.FC<ProtectedAppProps> = ({children}) => {
    useEffect(() => {
        (async () => {
            const muscleGroups: any = await API.graphql({query: queries.listMuscleGroups});
            console.log(muscleGroups)
            const listExercises: any = await API.graphql({query: queries.listExercises});
            console.log(listExercises)
            if (!muscleGroups?.data.listMuscleGroups.items.length) {
                console.log(muscleGroups)
                const createInitialMuscleGroups: any = initialMuscleGroups.map(name => API.graphql({
                    query: mutations.createMuscleGroup,
                    variables: {input: {name}}
                }))
                const infos = await Promise.all(createInitialMuscleGroups);
                console.log('created')
                /*for (const name of initialMuscleGroups) {
                    const muscleGroup: CreateMuscleGroupInput = {name};
                    const newMG: any = await API.graphql({
                        query: mutations.createMuscleGroup,
                        variables: {input: muscleGroup}
                    });
                }*/
            }
           /* const exercise: CreateExerciseInput = {
                name: 'Pull Up',
                muscleGroupID: '99a1bdb8-5e76-487c-b164-4e5c149343bf'
            };
            const newEx = await API.graphql({query: mutations.createExercise, variables: {input: exercise}});*/

            /*  const allTodos1 = await API.graphql({query: queries.listExercises});
              console.log(allTodos1)*/
            /* const muscleGroup: CreateMuscleGroupInput = {
                 name: 'Back',
             };

             const newMG: any = await API.graphql({query: mutations.createMuscleGroup, variables: {input: muscleGroup}});
             console.log(newMG)
             const exercise: CreateExerciseInput = {
                 name: 'Pull Up',
                 muscleGroupID: newMG.data.createMuscleGroup.id
             };
             const newEx = await API.graphql({query: mutations.createExercise, variables: {input: exercise}});
             console.log(newEx)*/


        })();

    }, []);
    return <div>{children}</div>;
}
