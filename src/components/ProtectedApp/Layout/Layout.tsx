import React from 'react';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import {AppBar} from './AppBar/AppBar'

type LayoutPropsType = {
    children: React.ReactNode | null
}
export const Layout: React.FC<LayoutPropsType> = ({children}) => {
    return <>
        <AppBar/>
        {children}
        <BottomNavigation/>
    </>
};