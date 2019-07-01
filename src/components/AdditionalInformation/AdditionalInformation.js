import React from 'react';
import './additionalInformation.css';

export const AdditionalInformation = () => {
    return (
        <section className="main-page__add-info">
            <article>
                <span className="main-page__info-text">
                <span className="main-page__info-text selection">Это еще не все...</span>
                Вы можете заработать дополнительные баллы,
                если разместите на своём сайте новость, интервью или
                статью БИБОСС о Вашей компании с активной ссылкой!
                50 баллов за активную ссылку на новость!
                </span>
            </article>
        </section>
    );
};