import React from 'react';
import { NavLink } from "react-router-dom"

const Navigation = ({ showLinks, setShowLinks, styles }) => {

    return (
        <div className="navigation" style={styles.popup}>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Home </li>
                </NavLink>
                <NavLink to="/contact" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Contact </li>
                </NavLink>
                <NavLink to="/createaccount" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Create an account </li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> About </li>
                </NavLink>
                <NavLink to="/products" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Products </li>
                </NavLink>
                <NavLink to="/basket" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li> Basket </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;