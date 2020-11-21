import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import BottomNav from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import HistoryIcon from '@material-ui/icons/History';
import routes from "../../../../config/routes";

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        boxShadow: '0px -1px 2px 0px rgba(0,0,0,0.2);'
    }
});

export default function BottomNavigation() {
    const classes = useStyles();
    let history = useHistory();
    const [value, setValue] = React.useState<string>(routes.HOME_PAGE.path);

    return (
        <BottomNav
            value={value}
            onChange={(e, value) => {
                setValue(value);
                history.push(value)
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction icon={<HomeIcon/>} value={routes.HOME_PAGE.path}/>
            <BottomNavigationAction icon={<FitnessCenterIcon/>} value={routes.EXERCISES.path}/>
            <BottomNavigationAction icon={<HistoryIcon/>} value={routes.WORKOUT_HISTORY.path}/>
        </BottomNav>
    );
}