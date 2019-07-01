import React from 'react';
import {InfoList} from "./InfoList";
import {CostList} from "./CostList";
import './placementRulesSection.css';

export const PlacementRulesSection = () => {
    return (
        <section className="main-page__rules-section">
            <InfoList />
            <CostList />
        </section>
    );
};