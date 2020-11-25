import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Badge from "@material-ui/core/Badge";
import {MuscleGroupIcon} from "./MuscleGroupIcon";
import {Box} from "@material-ui/core";
import {IMuscleGroup} from "../../../../shared/interfaces";
import {ExercisesList} from "../ExerciseLIst/ExercisesList";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        overflow: 'hidden',
        borderBottom: `1px solid ${theme.palette.grey['300']}`
    },
    summaryContent: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailsRoot: {padding: 0},
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: theme.typography.fontWeightRegular,
        marginLeft: theme.spacing(2)
    },
}));
export const MuscleGroup: React.FC<IMuscleGroup> = ({id, name, exercises}: IMuscleGroup) => {
    const classes = useStyles();

    return <div className={classes.root}>
        <Accordion square>
            <AccordionSummary
                classes={{
                    content: classes.summaryContent
                }}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >

                <Box alignItems='center' display='flex' flexGrow={1}>
                    <MuscleGroupIcon muscleGroup={name}/>
                    <Typography className={classes.heading}>{name}</Typography>
                </Box>

                <Badge color='secondary' badgeContent={Object.keys(exercises.items).length.toString()}/>
            </AccordionSummary>
            <AccordionDetails classes={{root: classes.detailsRoot}}>
                <ExercisesList muscleGroupId={id}/>
            </AccordionDetails>
        </Accordion>
    </div>
};