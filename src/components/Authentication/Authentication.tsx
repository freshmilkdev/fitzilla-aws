import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Auth} from 'aws-amplify';
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";
import {ConfirmSignUp} from "./ConfirmSignUp";
import LinearProgress from '@material-ui/core/LinearProgress';
import {routes} from "../../config/routes";

export enum FormTypeEnum {
    SignIn = "SIGN_IN",
    SignUp = "SIGN_UP",
    ConfirmSignUp = "VERIFICATION",
}

type InitialFormStateType = {
    email: string,
    formType: FormTypeEnum
}

export interface IAuthError {
    code: string,
    message: string,
    name: string
}

const initialFormState: InitialFormStateType = {
    email: '',
    formType: FormTypeEnum.SignIn
}

export interface ISignUpFormInput {
    email: string;
    name: string;
    password: string;
}

export interface ISignInFormInput {
    email: string;
    password: string;
}

export interface ISignUpConfirmInput {
    authCode: string;
}

export const Authentication: React.FC = () => {
    const [formState, updateFormState] = useState<InitialFormStateType>(initialFormState);
    const [authError, setAuthError] = useState<IAuthError | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const {formType, email} = formState;
    let history = useHistory();

    async function signUp({email, name, password}: ISignUpFormInput) {
        setAuthError(null);
        try {
            setLoading(true);
            const {user} = await Auth.signUp({
                username: email,
                password,
                attributes: {email, name}
            });
            updateFormState(() => ({...formState, formType: FormTypeEnum.ConfirmSignUp, email}));
            console.log(user);
        } catch (error) {
            console.log('Error signing up:', error);
            setAuthError(error);
        }
        setLoading(false);
    }

    async function confirmSignUp({authCode}: ISignUpConfirmInput) {
        setAuthError(null);
        setLoading(true);
        try {
            await Auth.confirmSignUp(email, authCode);
            console.log('Confirmed');
            updateFormState(() => ({...formState, formType: FormTypeEnum.SignIn}));
        } catch (error) {
            console.log('Error confirm sign up:', error);
            setAuthError(error);
        }
        setLoading(false);
    }

    async function signIn({email, password}: ISignInFormInput) {
        setAuthError(null);
        setLoading(true);
        try {
            await Auth.signIn(email, password);
            return history.push(routes.HOME_PAGE.path);
        } catch (error) {
            console.log('Error signing in', error);
            setAuthError(error);
        }
        setLoading(false);
    }

    function onChangeFormType(type: FormTypeEnum) {
        updateFormState(() => ({...formState, formType: type, email}));
        setAuthError(null);
    }

    function renderForm() {
        switch (formType) {
            case FormTypeEnum.SignIn: {
                return <SignIn authError={authError} onSignIn={signIn}
                               email={email}
                               onChangeFormType={onChangeFormType}/>
            }
            case FormTypeEnum.SignUp: {
                return <SignUp authError={authError} onSignUp={signUp} email={email}
                               onChangeFormType={onChangeFormType}/>
            }
            case FormTypeEnum.ConfirmSignUp: {
                return <ConfirmSignUp authError={authError}
                                      onConfirm={confirmSignUp}/>
            }
        }
    }

    return <div>
        {loading && <LinearProgress/>}
        {renderForm()}
    </div>
}