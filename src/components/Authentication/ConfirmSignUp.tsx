import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import {AuthForm} from "./AuthForm";
import {IAuthError, ISignUpConfirmInput} from "./Authentication";
import {Controller, useForm} from "react-hook-form";
import {SubmitButton} from "./SubmitButton";


type ConfirmSignUpProps = {
    authError: IAuthError | null,
    onConfirm: Function
}

export const ConfirmSignUp: React.FC<ConfirmSignUpProps> =
    ({authError, onConfirm}) => {
        const {handleSubmit, errors, control} = useForm<ISignUpConfirmInput>();
        const onSubmit = (data: ISignUpConfirmInput) => onConfirm(data);

        return (
            <AuthForm header={'Sign Up Confirmation'} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    defaultValue=""
                    as={TextField}
                    control={control}
                    rules={{
                        required: {value: true, message: 'Required field'},
                        minLength: {value: 6, message: `Minimum length: 6`}
                    }}
                    error={!!errors.authCode}
                    helperText={errors.authCode ? errors.authCode.message : null}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="authCode"
                    label="Verification Code"
                    name="authCode"
                    autoComplete="authCode"
                    autoFocus
                />

                {authError && <Typography color='error'>{authError.message}</Typography>}
                <SubmitButton label='Confirm'/>
            </AuthForm>
        )
    }