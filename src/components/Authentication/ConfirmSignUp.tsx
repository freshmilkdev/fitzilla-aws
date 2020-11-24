import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import {AuthForm} from "./AuthForm";
import {IAuthError, ISignUpConfirmInput} from "./Authentication";
import {Controller, useForm} from "react-hook-form";


type ConfirmSignUpProps = {
    authError: IAuthError | null,
    onConfirm: Function
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export const ConfirmSignUp: React.FC<ConfirmSignUpProps> =
    ({authError, onConfirm}) => {
        const classes = useStyles();
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Confirm
                </Button>
            </AuthForm>
        )
    }