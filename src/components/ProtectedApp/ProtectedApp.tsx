import React, {createContext} from 'react';

import {useMuscleGroupsExercises} from "./useMuscleGroupsExercises";
import {IAuthUser, useAuthenticatedUser} from "../Authentication/useAuthenticatedUser";
import {Layout} from "./Layout/Layout";
import {ModalProps, useModalState, ModalUpdaterContext, ModalStateContext, IModalState} from "./Layout/Modal/useModal";
import {Modal} from "./Layout/Modal/Modal";

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
    const [modalOptions, setModalOptions] = useModalState();
    useMuscleGroupsExercises(authUser);

    return (
        <AuthContext.Provider value={{authUser, signOut}}>
            <Layout>
                <ModalUpdaterContext.Provider value={setModalOptions}>
                    <ModalStateContext.Provider value={modalOptions as IModalState}>
                        {children}
                        <Modal/>
                    </ModalStateContext.Provider>
                </ModalUpdaterContext.Provider>
            </Layout>
        </AuthContext.Provider>);
}
