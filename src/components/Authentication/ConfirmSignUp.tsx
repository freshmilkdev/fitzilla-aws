import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {AuthForm} from "./AuthForm";
import { IAuthError} from "./Authentication";
import {Typography} from "@material-ui/core";

type ConfirmSignUpProps = {
    authCode: string,
    authError: IAuthError | null,
    errors: any,
    onSubmit: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export const ConfirmSignUp: React.FC<ConfirmSignUpProps> =
    ({ authCode, authError, errors, onSubmit, onChange, onBlur}) => {
        const classes = useStyles();
        return (
            <AuthForm header={'Sign Up Confirmation'}>
                <TextField
                    value={authCode}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.authCode || null}
                    helperText={errors.authCode || null}
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
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={onSubmit}
                >
                    Confirm
                </Button>
            </AuthForm>
        )
    }