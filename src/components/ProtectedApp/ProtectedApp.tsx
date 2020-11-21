import React, {useEffect, createContext} from 'react';

import {useMuscleGroups} from "./useMuscleGroups";
import {IAuthUser, useAuthenticatedUser} from "../Authentication/useAuthenticatedUser";
// import {CreateExerciseInput, CreateMuscleGroupInput, ListMuscleGroupsQuery} from "../../API";

type ProtectedAppProps = {
    children: React.ReactNode | null
};

export interface IAuthContext {
    authUser: IAuthUser | null,
    signOut: Function
};

export const AuthContext = createContext<IAuthContext>({
    authUser: null,
    signOut: () => {
    }
});

export const ProtectedApp: React.FC<ProtectedAppProps> = ({children}) => {
    const [authUser, signOut] = useAuthenticatedUser();

    const muscleGroups = useMuscleGroups();
    console.log(authUser);
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
    return <AuthContext.Provider value={{authUser, signOut}}>{children}</AuthContext.Provider>;
}
