import React from "react";
import './nav-items-links.css';
import { menuItems } from './nav-items'
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useRef } from "react";



export const NavItems = (props) => {

    const ref = useRef();

    return (
        <ul className={classNames("nav__items", { _active: props.open })} ref={ref} data-test-id='burger-menu'>
            {menuItems.map((item) => {
                return (
                    <Link key={item.id} to={`/${item.path}`} className="menu-item" data-test-id={`menu-link-${item.path}`} onClick={() => props.toggleMenuMode()}>
                        <li className="nav__item">{item.title}</li>
                    </Link>
                )
            })}
        </ul>
    )
}