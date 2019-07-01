import React from 'react';
export const renderFieldList = ({
                                input,
                                franchisesState,
                                type,
                                meta: { touched, error}
                            }) => (
    <>
            <select
                {...input}
                type={type} className='main-page__input-list'>
                <option value="" hidden>
                    Например, Subway
                </option>
                {franchisesState.map(franchise => (
                    <option value={franchise} key={franchise}>
                        {franchise}
                    </option>
                ))}
            </select>
        {touched &&
        ((error && <span className='main-page__input-error'>{error}</span>))}
    </>
);