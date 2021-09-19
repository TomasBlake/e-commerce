
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Category } from '../Types';
import NavListBtn from './NavListBtn';

interface NavigationMenuProps {
    categories: Category[];
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({categories}: NavigationMenuProps) => {

        return (
        <nav>
            <ol>
                {categories.map((category: Category) => (
                    <NavListBtn category={category} />
                ))}
            </ol>
        </nav>
        );
}

export default NavigationMenu;

const useStyles = makeStyles((theme: Theme) => {
    createStyles({

    });
});