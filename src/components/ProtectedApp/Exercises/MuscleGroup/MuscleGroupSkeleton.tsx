import {Box} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import React, {ReactElement} from "react";

export const MuscleGroupSkeleton: React.FC = (): ReactElement =>
    <Box display="flex" alignItems="center" margin={1}>
        <Box>
            <Skeleton variant="circle" height={40} width={40}/>
        </Box>
        <Box width="100%" margin={1}>
            <Skeleton width="100%">
                <Typography>.</Typography>
            </Skeleton>
        </Box>
    </Box>