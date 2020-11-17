import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import {makeStyles} from '@material-ui/core/styles';

import {AuthForm} from "./AuthForm";
import {FormTypeEnum} from "./Authentication";


type SignInProps = {
    email: string,
    password: string,
    errors: any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (formData: any) => void,
    onChangeFormType: Function,
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignIn: React.FC<SignInProps> =
    ({onChangeFormType, email, password, errors, onSubmit, onChange}) => {
        const classes = useStyles();
        return (
            <AuthForm header={'Sign In'}>
                <TextField
                    value={email}
                    error={errors.email || null}
                    helperText={errors.email || null}
                    onChange={onChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    value={password}
                    error={errors.password || null}
                    helperText={errors.password || null}
                    onChange={onChange}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    onClick={() => onSubmit({
                        email,
                        password
                    })}
                    type="button"
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