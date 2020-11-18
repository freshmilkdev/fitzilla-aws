import React, {useState} from 'react';
import {Auth, Hub} from 'aws-amplify';
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";
import {ConfirmSignUp} from "./ConfirmSignUp";
import LinearProgress from '@material-ui/core/LinearProgress';

export enum FormTypeEnum {
    SignIn = "SIGN_IN",
    SignUp = "SIGN_UP",
    ConfirmSignUp = "VERIFICATION",
}

type InitialFormStateType = {
    name: string,
    password: string
    email: string,
    authCode: string,
    formType: FormTypeEnum
}

export interface IAuthError {
    code: string,
    message: string,
    name: string
}

type TmpErrorsType = {
    [key: string]: boolean | null | undefined | string
}
const initialFormState: InitialFormStateType = {
    name: '',
    password: '',
    email: '',
    authCode: '',
    formType: FormTypeEnum.SignIn
}

const requiredFieldValidator = (value: string): string | boolean => value.length ? false : 'Required field';
const minLengthValidator = (value: string, min: number): string | boolean => value.length >= min ? false : `Minimum length: ${min}`;
const emailValidator = (value: string): string | boolean => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) ? false : 'Please enter valid email';
export const Authentication: React.FC = () => {
    const [formState, updateFormState] = useState<InitialFormStateType>(initialFormState);
    const [formErrors, setFormErrors] = useState({} as any);
    const [authError, setAuthError] = useState<IAuthError | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const {formType, name, email, password, authCode} = formState;

    function validateAll(formData: any) {
        // let key: keyof typeof formData;
        let tmpErrors: TmpErrorsType = {};
        for (let key in formData) {
            if (formState.hasOwnProperty(key)) {
                const value = formData[key];
                const validationResult = validateField(key, value);
                if (validationResult) {
                    tmpErrors[key] = validationResult;
                }
            }
        }
        setFormErrors(tmpErrors);
        return !Object.keys(tmpErrors).length;
    }

    function validateField(name: string, value: string) {
        switch (name) {
            case 'name':
                return requiredFieldValidator(value);
            case 'email':
                return emailValidator(email);
            case 'password':
                return requiredFieldValidator(value) || minLengthValidator(value, 8);
            case 'authCode':
                return requiredFieldValidator(value) || minLengthValidator(value, 6);
            default:
                return false;
        }
    }

    async function signUp() {
        if (validateAll({name, email, password})) {
            setAuthError(null);
            try {
                setLoading(true);
                const {user} = await Auth.signUp({
                    username: email,
                    password,
                    attributes: {email, name}
                });
                updateFormState(() => ({...formState, formType: FormTypeEnum.ConfirmSignUp}));
                console.log(user);
            } catch (error) {
                console.log('Error signing up:', error);
                setAuthError(error);
            }
            setLoading(false);
        }
    }

    async function confirmSignUp() {
        if (validateAll({authCode})) {
            setAuthError(null);
            setLoading(true);
            try {
                await Auth.confirmSignUp(email, authCode);
                console.log('Confirmed');
                updateFormState(() => ({...formState, formType: FormTypeEnum.SignIn}));
                //TODO: redirect to home
            } catch (error) {
                console.log('Error confirm sign up:', error);
                setAuthError(error);
            }
            setLoading(false);
        }
    }

    async function signIn() {
        if (validateAll({email, password})) {
            setAuthError(null);
            setLoading(true);
            try {
                const user = await Auth.signIn(email, password);
                console.log(user);
            } catch (error) {
                console.log('Error signing in', error);
                setAuthError(error);
            }
            setLoading(false);
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        updateFormState(() => ({...formState, [name]: value}));
        if (Object.keys(formErrors).length) {
            setFormErrors(() => ({...formErrors, [name]: validateField(name, value)}));
        }
    }

    function onBlur(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        if (Object.keys(formErrors).length) {
            setFormErrors(() => ({...formErrors, [name]: validateField(name, value)}));
        }
    }

    function onChangeFormType(type: FormTypeEnum) {
        updateFormState(() => ({...formState, formType: type}));
        setAuthError(null);
    }


    function renderForm() {
        switch (formType) {
            case FormTypeEnum.SignIn: {
                return <SignIn authError={authError} errors={formErrors} onSubmit={signIn} onChange={onChange}
                               onBlur={onBlur}
                               onChangeFormType={onChangeFormType}
                               {...formState}/>
            }
            case FormTypeEnum.SignUp: {
                return <SignUp authError={authError} errors={formErrors} onSubmit={signUp} onChange={onChange}
                               onBlur={onBlur}
                               onChangeFormType={onChangeFormType}
                               {...formState}/>
            }
            case FormTypeEnum.ConfirmSignUp: {
                return <ConfirmSignUp authCode={authCode} authError={authError} errors={formErrors}
                                      onBlur={onBlur}
                                      onSubmit={confirmSignUp}
                                      onChange={onChange}/>
            }
        }
    }

    return <div>
        {loading && <LinearProgress/>}
        {renderForm()}
    </div>
}