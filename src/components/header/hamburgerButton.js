import React, { useContext } from 'react';
import { MenuContext } from '../../context/navState';
import classNames from "classnames";
import { MobileNavigation } from './mobile-navigation/mobile-navigation';
import './burger-button/burger-button.css';



const HamburgerButton = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

    const clickHandler = () => {
        toggleMenuMode();
    };

    return (
        <>
            <div className="mob__nav" onClick={clickHandler} data-test-id='burger-menu-btn'>
                <div className={classNames("burger__menu-icon", { _active: isMenuOpen })} >
                    <span></span>
                </div>
            </div>
            {<MobileNavigation open={isMenuOpen} toggleMenuMode={toggleMenuMode} />}

        </>
    );
};

export default HamburgerButton;