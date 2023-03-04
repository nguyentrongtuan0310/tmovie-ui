import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import logo from '../../assets/tmovie.png';
import styles from './header.module.scss';
import Button from '../button/Button';

const cx = classNames.bind(styles);
const headerNav = [
    {
        display: 'Home',
        path: '/',
    },
    {
        display: 'Movies',
        path: '/movie',
    },
    {
        display: 'TVSeries',
        path: '/tv',
    },
];
const Header = () => {
    const headerRef = useRef(null);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add(cx('shrink'));
            } else {
                headerRef.current.classList.remove(cx('shrink'));
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => window.removeEventListener('scroll', shrinkHeader);
    }, []);
    console.log(headerRef.current);
    return (
        <div ref={headerRef} className={cx('header')}>
            <div className={cx('header_wrap', 'contain')}>
                <div className={cx('logo')}>
                    <img src={logo} alt="" />
                    <Link to="/">tMovie</Link>
                </div>
                <ul className={cx('header_nav')}>
                    {headerNav.map((e, i) => (
                        <li key={i}>
                            <NavLink className={({ isActive }) => cx({ active: isActive })} to={e.path}>
                                {e.display}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
