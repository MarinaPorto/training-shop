import React, { useRef, useContext } from 'react';
import useOnClickOutside from '../../hooks/onClickOutside';
import { MenuContext } from '../../context/navState';
import HamburgerButton from './hamburgerButton';

const MainMenu = () => {
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {

        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <div ref={node}>
            <HamburgerButton />
        </div>
    );
};

export default MainMenu;