import React from 'react';
import './footer.scss';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer container" style={{ backgroundImage: `url(${bg})` }}>
            <div className="footer__container">
                <div className="logo mb-3">
                    <img src={logo} alt="logo tmovie" />
                    <Link to="/">tMovie</Link>
                </div>
                <div className="footer__container__menus">
                    <div className="footer__container__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Term of services</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer__container__menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__container__menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
