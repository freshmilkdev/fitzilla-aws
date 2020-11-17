import React, {useState} from 'react';
import {Auth, Hub} from 'aws-amplify';
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";

export enum FormTypeEnum {
    SignIn = "SIGN_IN",
    SignUp = "SIGN_UP",
    Verification = "VERIFICATION",
}

type InitialFormStateType = {
    name: string,
    password: string
    email: string,
    verificationCode: string,
    formType: FormTypeEnum
}
const initialFormState: InitialFormStateType = {
    name: '',
    password: '',
    email: '',
    verificationCode: '',
    formType: FormTypeEnum.SignIn
}
type TmpErrorsType = {
    [key: string]: boolean | null | undefined | string
}
export const Authentication: React.FC = () => {
    const [formState, updateFormState] = useState<InitialFormStateType>(initialFormState);
    const [formErrors, setFormErrors] = useState({} as any);
    const {formType, name, email, password} = formState;

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
                return value.length ? false : 'Required field';
            case 'email':
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) ? false : 'Please enter valid email';
            case 'password':
                return value.length ? false : 'Required field';
            case 'verificationCode':
                return value.length && value.length >= 6 ? false : 'Required field';
            default:
                return false;
        }
    }

    async function signUp() {
        if (validateAll({name, email, password})) {
            try {
                const {user} = await Auth.signUp({
                    username: email,
                    password,
                    attributes: {email, name}
                });
                console.log(user);
            } catch (error) {
                console.log('error signing up:', error);
            }
        }
    }

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        updateFormState(() => ({...formState, [e.target.name]: e.target.value}));
        if (Object.keys(formErrors).length) {
            setFormErrors(() => ({...formErrors, [e.target.name]: validateField(e.target.name, e.target.value)}));
        }

    }

    function onChangeFormType(type: FormTypeEnum) {
        updateFormState(() => ({...formState, formType: type}));
    }


    function renderForm() {
        switch (formType) {
            case FormTypeEnum.SignIn: {
                return <SignIn errors={formErrors} onSubmit={validateAll} onChange={onChange}
                               onChangeFormType={onChangeFormType}
                               {...formState}/>
            }
            case FormTypeEnum.SignUp: {
                return <SignUp errors={formErrors} onSubmit={signUp} onChange={onChange}
                               onChangeFormType={onChangeFormType}
                               {...formState}/>
            }
        }
    }

    return <div>{renderForm()}</div>
}