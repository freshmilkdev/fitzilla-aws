import {useEffect, useState} from 'react';
import {Auth} from "aws-amplify";

import {routes} from "../../config/routes";
import {useHistory} from "react-router-dom";

export interface IAuthUser {
    name: string,
    email: string
}

export const useAuthenticatedUser = (): [IAuthUser | null, () => void] => {
    const [authUser, setAuthUser] = useState<IAuthUser | null>(null);
    let history = useHistory();

    async function signOut() {
        try {
            await Auth.signOut();
            history.push(routes.AUTH.path);
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    useEffect(() => {
        (async () => {
            const user = await Auth.currentUserInfo();
            if (user) setAuthUser({...user.attributes});
        })();
    }, []);

    return [authUser, signOut];
};