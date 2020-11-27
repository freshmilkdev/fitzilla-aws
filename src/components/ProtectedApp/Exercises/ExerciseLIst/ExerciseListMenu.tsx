import React, {memo, useContext} from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {IExercise} from "../../../../shared/interfaces";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/MoreVert";
import {Link} from "react-router-dom";
import {routes} from "../../../../config/routes";
import {ModalUpdaterContext} from "../../Layout/Modal/useModal";
import {useAppDispatch} from "../../../../redux/store";
import {deleteExercise} from "../../../../redux/slices/exercises";

export const ExerciseListMenu: React.FC<IExercise> = memo(({id, name}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const dispatch = useAppDispatch();

    const setModalState = useContext(ModalUpdaterContext);
    const modalProps = {
        title: "Delete exercise",
        description: `Do you want delete ${name} permanently from list?`,
        onConfirm: () => {
            setModalState({isOpen: false});
            dispatch(deleteExercise({id}));
            console.log('Deleted');
        },
        onClose: () => setModalState({isOpen: false}),
        confirmLabel: 'Confirm',
        cancelLabel: 'Cancel'
    };
    const handleDelete = () => {
        setAnchorEl(null);
        setModalState({
            isOpen: true,
            modalProps
        })
    }
    return (
        <>
            <IconButton edge="end" aria-label="menu" onClick={handleOpen}>
                <MenuIcon/>
            </IconButton>
            <Menu anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}>
                <MenuItem component={Link} to={`${routes.EXERCISE.path}/${id}`} onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </>
    );
});
