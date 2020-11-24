import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface ISubmitButton {
    label: string
}

export const SubmitButton: React.FC<ISubmitButton> =
    ({label}) => {
        const classes = useStyles();
        return (
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                size='large'
            >
                {label}
            </Button>
        )
    }