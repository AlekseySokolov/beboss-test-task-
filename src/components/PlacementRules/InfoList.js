import React from 'react';

export const InfoList = () => {
    return (
        <div className="main-page__rules-list-wrap">
            <h2 className="main-page__info-title">Правила размещения ссылки</h2>
            <ul className="main-page__info-list rules-list">
                <li className="main-page__info-text">Ссылка должна быть индексируемой (без тегов {`<noindex> и <nofollow>`}),</li>
                <li className="main-page__info-text">Ссылка должна быть читаемой, не скрытой от глаз посетителя сайта,</li>
                <li className="main-page__info-text">Ссылка должна быть размещена на странице сайта, посвящённой франчайзингу,</li>
                <li className="main-page__info-text">При размещении ссылок на другие порталы о франчайзинге – баллы обнуляются.</li>
            </ul>
        </div>
    );
};