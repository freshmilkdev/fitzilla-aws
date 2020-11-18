import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import {AuthForm} from "./AuthForm";
import {FormTypeEnum, IAuthError} from "./Authentication";
import {Typography} from "@material-ui/core";

type SignUpProps = {
    name: string,
    email: string,
    password: string,
    errors: any,
    authError: IAuthError | null,
    onSubmit: () => void,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void,
    onChangeFormType: Function
}

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
export const SignUp: React.FC<SignUpProps> =
    ({name, email, password, errors, authError, onSubmit, onChange, onBlur, onChangeFormType}) => {
        const classes = useStyles();
        return (
            <AuthForm header={'Sign Up'}>
                <TextField
                    value={name}
                    onChange={onChange}
                    onBlur={onBlur}
                    error={errors.name || null}
                    helperText={errors.name || null}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
                <TextField
                    value={email}
                    onChange={onChange}
                    onBlur={onBlur}
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
                    onBlur={onBlur}
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

                {authError && <Typography color='error'>{authError.message}</Typography>}
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
                    onClick={onSubmit}
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