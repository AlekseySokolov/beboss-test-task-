import React from 'react';
import footerLogo from '../../images/footer-logo.png';
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <img src={footerLogo} alt="" className="footer__footer-logo"/>
            </div>
            <div></div>
        </footer>
    );
};