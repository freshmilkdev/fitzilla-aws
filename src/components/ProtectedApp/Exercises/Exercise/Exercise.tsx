import React, {useEffect, useState} from "react";
import {useParams, useHistory, useLocation} from 'react-router-dom';
import {Controller, useForm} from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/rootReducer";
import {IExercise, IExerciseById, IMuscleGroup} from "../../../../shared/interfaces";
import {createExercise} from "../../../../redux/slices/exercises";
import {useAppDispatch} from "../../../../redux/store";
import {routes} from "../../../../config/routes";

const useStyles = makeStyles((theme) => ({
    form: {
        padding: theme.spacing(2),
    },
    formControl: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
        width: '100%'
    },
    select: {
        width: '100%'
    }
}));

// useState<IExercise>({} as IExercise);
interface IExerciseRouterParams {
    id: string
}

export const Exercise: React.FC = () => {
    const dispatch = useAppDispatch();
    let history = useHistory();
    const muscleGroups: Array<IMuscleGroup> = useSelector((state: RootState) => state.muscleGroups.items);
    const exercises: IExerciseById = useSelector((state: RootState) => state.exercises.items.byId);

    const {id} = useParams<IExerciseRouterParams>();

    const classes = useStyles();

    const {handleSubmit, errors, control, setValue, register, getValues, watch, reset} = useForm<IExercise>();

    const onSubmit = async (data: IExercise) => {
        console.log(data)
        dispatch(createExercise(data)).then(() => {
            history.push(routes.EXERCISES.path);
        });
    };

    useEffect(() => {
        register({name: 'muscleGroupID'}, {required: true});
    }, [register]);
    const muscleGroupID = watch("muscleGroupID");

    useEffect(() => {
        if (id && exercises) {
            reset(exercises[id]);
        }
        console.log('a')
    }, [exercises, id, reset]);

    useEffect(() => {
        if (muscleGroups.length && !muscleGroupID && !id) {
            setValue('muscleGroupID', muscleGroups[0].id);
        }
    }, [muscleGroups, exercises]);

    return <form onSubmit={handleSubmit(onSubmit)} id='exercise-form' className={classes.form}>
        <Controller
            defaultValue=""
            as={TextField}
            control={control}
            rules={{required: {value: true, message: 'Required field'}}}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : null}
            margin="normal"
            fullWidth
            id="exercise-name"
            label="Exercise"
            name="name"
        />

        <FormControl className={classes.formControl}>
            <InputLabel shrink={!!muscleGroupID}>Muscle group</InputLabel>
            <Select
                value={muscleGroupID}
                className={classes.select}
                name='muscleGroupID'
                native
                onChange={(e) => setValue('muscleGroupID', e.target.value)}
            >
                {(muscleGroups || []).map(({id, name}: IMuscleGroup) => <option key={id} value={id}>{name}</option>)}
            </Select>
        </FormControl>

        <Controller
            multiline
            defaultValue=""
            as={TextField}
            control={control}
            margin="normal"
            fullWidth
            label="Description"
            name="description"
        />
        <button type={"submit"}>ok</button>
    </form>
};