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
    username: string,
    password: string
    passwordConfirm: string,
    email: string,
    verificationCode: string,
    formType: FormTypeEnum
}
const initialFormState: InitialFormStateType = {
    username: '',
    password: '',
    passwordConfirm: '',
    email: '',
    verificationCode: '',
    formType: FormTypeEnum.SignIn
}

export const Authentication: React.FC = () => {
    const [formState, updateFormState] = useState<InitialFormStateType>(initialFormState);

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        updateFormState(() => ({...formState, [e.target.name]: e.target.value}));
    }

    function onChangeFormType(type: FormTypeEnum) {
        updateFormState(() => ({...formState, formType: type}));
    }

    const {formType} = formState;

    return <div>
        {
            formType === FormTypeEnum.SignIn && (
                <SignIn onChange={onChange} onChangeFormType={onChangeFormType} {...formState}/>
            )
        }
        {
            formType === FormTypeEnum.SignUp && (
                <SignUp onChange={onChange} onChangeFormType={onChangeFormType} {...formState}/>
            )
        }
    </div>
}