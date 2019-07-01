import React from 'react';
import './putTheLinkSection.css';
import mainPageCover from '../../images/main-page-cover.png';
import mainPageMac from '../../images/main-page-mac.png';

export const PutTheLinkSection = () => {
    return (
        <section className="main-page__cover-section">
            <div className="main-page__cover-container">
                <img
                    className="main-page__cover" src={mainPageCover} alt="main-page-cover"/>
                <div className="main-page__wrap-cover-content">
                    <div className="main-page__cover-text-container">
                        <span className="main-page__cover-text">Поставь ссылку на БИБОСС</span>
                        <h1 className="main-page__cover-title">Заработай баллы!</h1>
                    </div>
                    <div className="main-page__wrap-mac">
                        <img className="main-page__mac" src={mainPageMac} alt="main-page-mac"/>
                        <a
                            className="main-page__mac-link"
                            href="http://www.dunkindonutsmoscow.ru/"
                        >
                            Франшиза Dunkin’ Donuts на БИБОСС
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};