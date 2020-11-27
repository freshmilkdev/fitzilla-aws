import React from 'react';
import LinearProgress from "@material-ui/core/LinearProgress";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/rootReducer";

export const ProgressBar: React.FC = ():React.ReactElement | null=>{
    const loading: boolean = useSelector((state: RootState) => state.requestStatus.loading);
    return loading ? <LinearProgress/> : null;
}