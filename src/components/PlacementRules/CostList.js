import React from 'react';

export const CostList = () => {
    return (
        <div className="main-page__rules-cost-wrap">
            <h2 className="main-page__info-title">Стоимость ссылки</h2>
            <ul className="main-page__cost-list">
                <li className="main-page__point">200 баллов</li>
                <li className="main-page__info-text">ТиЦ Вашего сайта от 10</li>
                <li className="main-page__point">50 баллов</li>
                <li className="main-page__info-text">ТиЦ Вашего сайта от 0 до 10</li>
            </ul>
        </div>
    );
};