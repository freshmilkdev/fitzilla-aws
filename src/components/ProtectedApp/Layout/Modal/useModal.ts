import React, { useState} from "react";

export const ModalStateContext = React.createContext({} as IModalState);

export const ModalUpdaterContext = React.createContext({} as any);
export type ModalProps = {
    title: string,
    description: string | React.ReactElement,
    onClose: Function,
    onConfirm: Function,
    confirmLabel: string,
    cancelLabel: string
};

export interface IModalState {
    isOpen: boolean,
    modalProps: ModalProps
}

const initialModalProps: ModalProps = {
    title: '',
    description: '',
    onClose: () => {},
    onConfirm: () => {},
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel'
}
export const useModalState = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [modalProps, setModalProps] = useState<ModalProps>(initialModalProps)

    const setModalState = ({isOpen, modalProps = initialModalProps}: IModalState) => {
        setIsOpen(isOpen)
        setModalProps(modalProps)
    }

    return [{isOpen, modalProps}, setModalState]
}