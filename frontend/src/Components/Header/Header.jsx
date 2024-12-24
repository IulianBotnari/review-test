
import { Outlet, NavLink, Navigate } from 'react-router'
import { useGlobalContext } from '../../GlobalContext/GlobalContext.jsx';

import { useState } from "react";
import Style from '../Header/Header.module.css'


export default function Header() {
    const [activeIndex, setActiveIndex] = useState(-1)


    const handleNavClick = (index) => {
        setActiveIndex(index - 1)
    };

    return (
        <>
            <header className={Style.header}>
                <nav className={Style.navigation}>
                    <ul className={Style.ul}>
                        <li className={Style.li} onClick={() => handleNavClick(0)}>
                            <NavLink
                                to='/home'
                                className={({ isActive }) => isActive ? `${Style.active1} ${Style.a} ` : Style.a}
                            >
                                <span className={Style.icon}>
                                    <i className='bi-house'></i>
                                </span>
                                <span className={Style.text}>Home</span>
                            </NavLink>
                        </li>

                        <li className={Style.li} onClick={() => handleNavClick(1)}>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => isActive ? `${Style.a} ${Style.active1}` : Style.a}
                            >
                                <span className={Style.icon}>
                                    <i className='bi-door-open'></i>
                                </span>
                                <span className={Style.text}>Login</span>
                            </NavLink>
                        </li>

                        <li className={Style.li} onClick={() => handleNavClick(2)}>
                            <NavLink
                                to='/signin'
                                className={({ isActive }) => isActive ? `${Style.a} ${Style.active1}` : Style.a}
                            >
                                <span className={Style.icon}>
                                    <i className='bi-box-arrow-in-right'></i>
                                </span>
                                <span className={Style.text}>Signin</span>
                            </NavLink>
                        </li>


                        <div
                            className={Style.indicator}
                            style={{ transform: `translateX(${activeIndex * 700}%)` }}
                        />
                    </ul>
                </nav>
            </header>
        </>
    );
}



