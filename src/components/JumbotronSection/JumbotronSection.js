import React from 'react';
import './jumbotronSection.css';

export const JumbotronSection = () => {
    return (
        <section className="main-page__jumbotron-section">
            <article>
                <div className="main-page__jumbotron">
                    <span className="main-page__info-text">Зачем нужны <a href="#">баллы?</a></span>
                    <h2 className="main-page__info-title">Больше баллов — выше позиция в выдаче категории</h2>
                </div>
            </article>
        </section>
    );
};