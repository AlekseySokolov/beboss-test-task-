import React from 'react';
import headerLogo from '../../images/logo-biboss.png';
import './header.css';

export const Header = () => {
    return (
        <header className="header">
            <img src={headerLogo} alt="" className="header__header-logo"/>
        </header>
    )
}