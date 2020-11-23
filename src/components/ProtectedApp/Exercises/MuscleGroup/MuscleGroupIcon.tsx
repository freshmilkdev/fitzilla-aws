import React, {ReactElement} from 'react';
import {ReactComponent as Abs} from '../../../../assets/images/muscle-group-icons/abs.svg';
import {ReactComponent as Back} from '../../../../assets/images/muscle-group-icons/back.svg';
import {ReactComponent as Chest} from '../../../../assets/images/muscle-group-icons/chest.svg';
import {ReactComponent as Arms} from '../../../../assets/images/muscle-group-icons/arm.svg';
import {ReactComponent as Shoulders} from '../../../../assets/images/muscle-group-icons/shoulders.svg';
import {ReactComponent as Legs} from '../../../../assets/images/muscle-group-icons/legs.svg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    svgIcon: {
        fill: theme.palette.primary.main,
        width: '1.5rem',
        height: '1.5rem'
    }
}));

interface IMuscleGroupIconProps {
    muscleGroup: string
}

export const MuscleGroupIcon: React.FC<IMuscleGroupIconProps> = ({muscleGroup}): ReactElement => {
    const classes = useStyles();
    //let Component: any = muscleGroupName;
    // return <Component className={classes.svgIcon}/>;
    switch (muscleGroup) {
        case 'Back':
            return <Back className={classes.svgIcon}/>;
        case 'Chest':
            return <Chest className={classes.svgIcon}/>;
        case 'Arms':
            return <Arms className={classes.svgIcon}/>;
        case 'Shoulders':
            return <Shoulders className={classes.svgIcon}/>;
        case 'Legs':
            return <Legs className={classes.svgIcon}/>;
        case 'Abs':
            return <Abs className={classes.svgIcon}/>;
        default:
            return <Abs className={classes.svgIcon}/>
    }
};
