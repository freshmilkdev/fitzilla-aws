import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ModalStateContext} from "./useModal";

export const Modal: React.FC = () => {
    const modalContext = useContext(ModalStateContext);
    const {
        isOpen,
        modalProps: {
            title,
            description,
            onConfirm,
            onClose,
            confirmLabel,
            cancelLabel
        }
    } = modalContext;

    return (
        <Dialog
            fullWidth
            open={isOpen}
            onBackdropClick={() => onClose()}
            onClose={() => onClose()}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
        >
            <DialogTitle id="dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onConfirm()} color="primary" autoFocus>
                    {confirmLabel}
                </Button>
                <Button onClick={() => onClose()} color="secondary">
                    {cancelLabel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
