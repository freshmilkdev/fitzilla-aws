import React, {useEffect} from 'react';
import {useMuscleGroups} from "./useMuscleGroups";
// import {CreateExerciseInput, CreateMuscleGroupInput, ListMuscleGroupsQuery} from "../../API";

type ProtectedAppProps = {
    children: React.ReactNode | null
};


export const ProtectedApp: React.FC<ProtectedAppProps> = ({children}) => {
    const muscleGroups = useMuscleGroups();
    /*    useEffect(() => {
            /!* (async () => {

                /!* const exercise: CreateExerciseInput = {
                     name: 'Pull Up',
                     muscleGroupID: '99a1bdb8-5e76-487c-b164-4e5c149343bf'
                 };
                 const newEx = await API.graphql({query: mutations.createExercise, variables: {input: exercise}});*!/
             })();*!/

        }, []);*/
    useEffect(() => {
        console.log(muscleGroups);
    }, [muscleGroups]);
    return <div>{children}</div>;
}
