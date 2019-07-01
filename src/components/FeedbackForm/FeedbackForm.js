import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import normalizePhone from './FeedbackFormComponents/normalizePhone';
import {renderField} from "./FeedbackFormComponents/renderField";
import {FormButtons} from "./FeedbackFormComponents/formButton";
import {validate} from "./FeedbackFormComponents/validate";
import {renderFieldList} from "./FeedbackFormComponents/renderFieldList";
import './feedbackForm.css';


const FeedbackForm = (props) => {
    const {handleSubmit, franchisesState, SEND} = props;
    const submit = (values) => {
        return new Promise((resolve) => {
            return resolve(SEND(values))
        }).then(() => alert(
            "Отправлено : " + values.name +"," +
            " Номер телефона : " + values.phone +"," +
            " Франшиза : " + values.franchise
        ))
    }
    return (
        <section className="main-page__form-section">
            <h3 className="main-page__form-title">Получить ссылку</h3>
            <form
                onSubmit={handleSubmit(submit)}
                className='main-page__feedback-form'>
                <div className="main-page__input-wrap">
                    <label>Ваше имя</label>
                    <div className="main-page__input-container">
                        <Field
                            name="name"
                            component={renderField}
                            type="text"
                            label="Представьтесь, пожалуйста"
                        />
                    </div>
                </div>
                <div className="main-page__input-wrap">
                    <label>Номер телефона</label>
                    <div className="main-page__input-container">
                        <Field
                            name="phone"
                            component={renderField}
                            type="text"
                            label="Для начисления баллов и связи с Вами"
                            normalize={normalizePhone}
                        />
                    </div>
                </div>
                <div className="main-page__input-wrap">
                    <label>Название франшизы</label>
                    <div className="main-page__input-container">
                        <Field
                            name="franchise"
                            component={renderFieldList}
                            franchisesState={franchisesState}
                        />
                    </div>
                </div>
                <FormButtons {...props} />
            </form>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        franchisesState: state.franchisesState,
        personForFeedbackState : state.personForFeedbackState
    }
}

const toConnect = connect(
    mapStateToProps,
    actions
)(FeedbackForm);

export default reduxForm({form : 'loginForm', validate})(toConnect);