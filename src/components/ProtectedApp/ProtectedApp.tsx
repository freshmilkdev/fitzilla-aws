import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {createMuscleGroups, fetchMuscleGroups} from "../../redux/slices/muscleGroups";
import {useAppDispatch} from "../../redux/store";
import {RootState} from "../../redux/rootReducer";
// import {CreateExerciseInput, CreateMuscleGroupInput, ListMuscleGroupsQuery} from "../../API";

type ProtectedAppProps = {
    children: React.ReactNode | null
};


export const ProtectedApp: React.FC<ProtectedAppProps> = ({children}) => {
    //TODO: loader for initial request
    const dispatch = useAppDispatch();
    const muscleGroups = useSelector((state: RootState) => state.muscleGroups.items);
    useEffect(() => {
        dispatch(fetchMuscleGroups()).then(({payload}) => {
            if (!payload.length) {
                dispatch(createMuscleGroups());
            }
        });

        /* (async () => {
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
                 const createdGroups = await Promise.all(createInitialMuscleGroups);
                 //TODO: put into redux
                 console.log(createdGroups);
                 console.log('created')
                 /!*for (const name of initialMuscleGroups) {
                     const muscleGroup: CreateMuscleGroupInput = {name};
                     const newMG: any = await API.graphql({
                         query: mutations.createMuscleGroup,
                         variables: {input: muscleGroup}
                     });
                 }*!/
             }
            /!* const exercise: CreateExerciseInput = {
                 name: 'Pull Up',
                 muscleGroupID: '99a1bdb8-5e76-487c-b164-4e5c149343bf'
             };
             const newEx = await API.graphql({query: mutations.createExercise, variables: {input: exercise}});*!/

         })();*/

    }, []);
    useEffect(() => {
        console.log(muscleGroups);
    }, [muscleGroups]);
    return <div>{children}</div>;
}
