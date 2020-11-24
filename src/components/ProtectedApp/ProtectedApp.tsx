import React, {createContext, useEffect} from 'react';

import {useMuscleGroupsExercises} from "./useMuscleGroupsExercises";
import {IAuthUser, useAuthenticatedUser} from "../Authentication/useAuthenticatedUser";
import {Layout} from "./Layout/Layout";
import {CreateExerciseInput} from "../../API";
import * as mutations from "../../graphql/mutations";
// import {CreateExerciseInput, CreateMuscleGroupInput, ListMuscleGroupsQuery} from "../../API";
import {API} from "aws-amplify";
type ProtectedAppProps = {
    children: React.ReactNode | null
};

export interface IAuthContext {
    authUser: IAuthUser | null,
    signOut: Function
};

export const AuthContext = createContext<IAuthContext>({
    authUser: null,
    signOut: () => {}
});

export const ProtectedApp: React.FC<ProtectedAppProps> = ({children}) => {
    const [authUser, signOut] = useAuthenticatedUser();
    useMuscleGroupsExercises(authUser);
/*
        useEffect(() => {
             (async () => {

                 const exercise: CreateExerciseInput = {
                     name: 'Pull Up',
                     muscleGroupID: '9c9685e4-3ded-47d5-8ad9-8c7598be7aad'
                 };
                 const newEx = await API.graphql({query: mutations.createExercise, variables: {input: exercise}});
             })();

        }, []);*/

    return <AuthContext.Provider value={{authUser, signOut}}>
        <Layout>
            {children}
        </Layout>
    </AuthContext.Provider>;
}
