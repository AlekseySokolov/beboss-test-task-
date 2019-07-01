import React from 'react';
export const renderField = ({
                                input,
                                label,
                                type,
                                meta: { touched, error}
                            }) => (
    <>
            <input {...input} placeholder={label} type={type} className='main-page__input-text' />
        {touched &&
        ((error && <span className='main-page__input-error'>{error}</span>))}
    </>
);