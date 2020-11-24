import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import {makeStyles} from '@material-ui/core/styles';

import {AuthForm} from "./AuthForm";
import {FormTypeEnum, IAuthError, ISignInFormInput} from "./Authentication";
import {Typography} from "@material-ui/core";
import {Controller, useForm} from "react-hook-form";


type SignInProps = {
    email: string,
    authError: IAuthError | null,
    onSignIn: Function,
    onChangeFormType: Function,
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignIn: React.FC<SignInProps> =
    ({email, authError, onChangeFormType, onSignIn}) => {
        const classes = useStyles();
        const {handleSubmit, errors, control, setValue} = useForm<ISignInFormInput>();
        const onSubmit = (data: ISignInFormInput) => onSignIn(data);
        useEffect(() => {
            setValue('email', email, {shouldDirty: true})
        }, [email]);

        return (
            <AuthForm header={'Sign In'} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    defaultValue=""
                    as={TextField}
                    control={control}
                    rules={{
                        required: {value: true, message: 'Required field'},
                        pattern: {
                            value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            message: 'Please enter valid email'
                        }
                    }}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : null}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <Controller
                    defaultValue=""
                    as={TextField}
                    control={control}
                    rules={{
                        required: {value: true, message: 'Required field'},
                        minLength: {value: 8, message: `Minimum length: 8`}
                    }}
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : null}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                {authError && <Typography color='error'>{authError.message}</Typography>}
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link
                            component="button"
                            variant="body2"
                            type="button"
                            onClick={() => console.log('Forgot password.')}
                        >
                            Forgot Password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            component="button"
                            variant="body2"
                            type="button"
                            onClick={() => onChangeFormType(FormTypeEnum.SignUp)}
                        >
                            Don't have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </AuthForm>
        )
    }