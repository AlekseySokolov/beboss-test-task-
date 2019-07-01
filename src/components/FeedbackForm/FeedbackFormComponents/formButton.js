import React from 'react';

export const FormButtons = (props) => {
    const {pristine, submitting} = props
    return (
        <div className='main-page__buttonContainer'>
            <button
                className={pristine === true ? 'main-page__btn-submit disabled' : "main-page__btn-submit"}
                type="submit" label="submit"
                disabled={pristine || submitting }>
                Получить ссылку
            </button>
        </div>
    );
};