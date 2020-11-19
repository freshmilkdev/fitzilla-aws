import React from 'react';
import BottomNavigation from './BottomNavigation/BottomNavigation';

type LayoutPropsType = {
    children: React.ReactNode | null
}
export const Layout: React.FC<LayoutPropsType> = ({children}) => {
    return <>
        {children}
        <BottomNavigation/>
    </>
};