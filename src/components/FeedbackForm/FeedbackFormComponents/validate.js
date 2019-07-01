export const validate = values => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Введите имя'
    }
    if (String(values.phone).length < 12) {
        errors.phone = 'Неправильный номер'
    }
    if (!values.phone) {
        errors.phone = 'Введите номер телефона'
    }
    if (!values.franchise) {
        errors.franchise = 'Выберите франшизу'
    }
    return errors;
};