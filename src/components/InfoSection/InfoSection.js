import React from 'react';
import './infoSection.css';

export const InfoSection = () => {
    return (
        <section className="main-page__info-section">
            <h4 className="main-page__info-text">
                БИБОСС даёт возможность получить бесплатные баллы –
                нужно лишь разместить на сайте компании любую из ссылок:
            </h4>
            <ul className="main-page__info-list">
                <li className="main-page__info-text">Текстовая ссылка «Франшиза [Название] на БИБОСС»</li>
                <li className="main-page__info-text">Текстовая ссылка «Наша франшиза на БИБОСС»</li>
                <li className="main-page__info-text">Кнопка “Нравится франшиза” + счетчик популярности</li>
            </ul>
        </section>
    );
};