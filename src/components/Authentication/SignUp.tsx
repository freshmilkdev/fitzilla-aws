import React, {useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import {useForm, Controller} from "react-hook-form";
import {AuthForm} from "./AuthForm";
import {FormTypeEnum, IAuthError, ISignUpFormInput} from "./Authentication";
import {SubmitButton} from "./SubmitButton";


type SignUpProps = {
    email: string,
    authError: IAuthError | null,
    onSignUp: Function,
    onChangeFormType: Function
}

export const SignUp: React.FC<SignUpProps> =
    ({email, authError, onChangeFormType, onSignUp}) => {
        const {handleSubmit, errors, control, setValue} = useForm<ISignUpFormInput>();
        const onSubmit = (data: ISignUpFormInput) => onSignUp(data);
        useEffect(() => {
            setValue('email', email, {shouldDirty: true})
        }, [email]);
        console.log(errors)
        return (
            <AuthForm header={'Sign Up'} onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    defaultValue=""
                    as={TextField}
                    control={control}
                    rules={{required: {value: true, message: 'Required field'},}}
                    error={!!errors.name}
                    helperText={errors.name ? errors.name.message : null}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                />
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
                <SubmitButton label='Sign Up'/>

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