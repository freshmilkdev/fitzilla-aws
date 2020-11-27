import React from 'react';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import {AppBar} from './AppBar/AppBar'
import {ProgressBar} from "./ProgressBar/ProgressBar";

type LayoutPropsType = {
    children: React.ReactNode | null
}
export const Layout: React.FC<LayoutPropsType> = ({children}) => {
    return <>
        <AppBar/>
        <ProgressBar/>
        {children}
        <BottomNavigation/>
    </>
};