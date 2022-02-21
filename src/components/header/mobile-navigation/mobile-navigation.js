import React from "react";
import './mobile-navigation.css';
import { NavItems } from "../nav-items/nav-items-links";




export const MobileNavigation = (props) => {
    return (


        <nav className="nav mobile-navigation" data-test-id='burger-menu'>

            <NavItems  open={props.open}  setOpen={props.setOpen} toggleMenuMode={props.toggleMenuMode} refBtn={props.refBtn}/>
        </nav>

    )
}

