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
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {AuthForm} from "./AuthForm";
import {FormTypeEnum} from "./Authentication";

type SignUpProps = {
    username: string,
    email: string,
    password: string,
    errors: any,
    onSubmit: (formData: any) => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onChangeFormType: Function
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export const SignUp: React.FC<SignUpProps> =
    ({username, email, password, errors, onSubmit, onChange, onChangeFormType,}) => {
        const classes = useStyles();
        return (
            <AuthForm header={'Sign Up'}>
                <TextField
                    value={username}
                    onChange={onChange}
                    error={errors.username || null}
                    helperText={errors.username || null}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                />
                <TextField
                    value={email}
                    onChange={onChange}
                    error={errors.email || null}
                    helperText={errors.email || null}
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
                    onChange={onChange}
                    error={errors.password || null}
                    helperText={errors.password || null}
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
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => onSubmit({
                        username,
                        email,
                        password
                    })}
                >
                    Sign Up
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
                            onClick={() => onChangeFormType(FormTypeEnum.SignIn)}
                        >
                            Already have an account? Sign In
                        </Link>
                    </Grid>
                </Grid>
            </AuthForm>
        )
    }