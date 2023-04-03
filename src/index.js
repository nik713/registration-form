import './styles/index.scss';
import { patch, h } from './shared/v-dom';
import { emailPattern, passwordPattern } from './shared/validation-patterns';
import { store } from './store/form';

const container = document.createElement('div');
document.body.append(container);
const root = container;

export const RegistrationForm = (store) => {
  const { firstName, lastName, birthDate, email, password, confirmPassword } = store.state;
  const { isShowValidMessages } = store.state;

  const validateForm = () => {
    const invalid = true;
    switch (invalid) {
      case firstName.length < 2 || firstName.length > 25:
      case lastName.length < 2 || lastName.length > 25:
      case !birthDate.length:
      case !email.length:
      case !email.match(emailPattern):
      case !password.match(passwordPattern):
      case !confirmPassword.match(passwordPattern):
      case password !== confirmPassword:
        return false;
      default:
        return true;
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    store.setState({ ...store.state, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async () => {
    const isValidForm = validateForm();
    if (isValidForm) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(store.state),
        });
        const payload = await response.json();
        console.log(payload);
        store.setState({
          firstName: '',
          lastName: '',
          birthDate: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      } catch (e) {
        console.error(e);
      }
    } else {
      store.setState({ ...store.state, isShowValidMessages: true });
    }
  };

  return h('div', { class: 'app' }, [
    h('form', { class: 'form' }, [
      h('div', { class: 'input-wrapper' }, [
        h('label', {}, [
          h('input', {
            class: 'input',
            name: 'firstName',
            type: 'text',
            value: firstName,
            placeholder: 'Имя',
            oninput: handleOnChange,
          }),
        ]),
        isShowValidMessages
          ? (!firstName.length && h('div', { class: 'input-wrapper__error-message' }, ['Пожалуйста укажите Имя'])) ||
            ((firstName.length < 2 || firstName.length > 25) &&
              h('div', { class: 'input-wrapper__error-message' }, ['Неверная длинна имени']))
          : false,
      ]),
      h('div', { class: 'input-wrapper' }, [
        h('label', {}, [
          h('input', {
            class: 'input',
            name: 'lastName',
            type: 'text',
            value: lastName,
            placeholder: 'Фамилия',
            oninput: handleOnChange,
          }),
        ]),
        isShowValidMessages
          ? (!lastName.length && h('div', { class: 'input-wrapper__error-message' }, ['Пожалуйста укажите Фамилию'])) ||
            ((lastName.length < 2 || lastName.length > 25) &&
              h('div', { class: 'input-wrapper__error-message' }, ['Неверная длинна фамилии']))
          : false,
      ]),
      h('div', { class: 'input-wrapper' }, [
        h('label', {}, [
          h('input', {
            class: 'input',
            name: 'birthDate',
            type: 'date',
            value: birthDate,
            placeholder: 'Дата рождения',
            max: new Date().toISOString().slice(0, 10),
            onchange: handleOnChange,
          }),
        ]),
        isShowValidMessages
          ? !birthDate.length &&
            h('div', { class: 'input-wrapper__error-message' }, ['Пожалуйста укажите дату рождения'])
          : false,
      ]),
      h('div', { class: 'input-wrapper' }, [
        h('label', {}, [
          h('input', {
            class: 'input',
            name: 'email',
            type: 'email',
            value: email,
            placeholder: 'Электронная почта',
            oninput: handleOnChange,
          }),
        ]),
        isShowValidMessages
          ? !email.length &&
            h('div', { class: 'input-wrapper__error-message' }, ['Пожалуйста укажите электронную почту'])
          : false,
      ]),
      h('div', { class: 'input-wrapper' }, [
        h('label', {}, [
          h('input', {
            class: 'input',
            name: 'password',
            type: 'password',
            value: password,
            placeholder: 'Пароль',
            oninput: handleOnChange,
          }),
        ]),
        isShowValidMessages
          ? (!password.length && h('div', { class: 'input-wrapper__error-message' }, ['Пожалуйста укажите пароль'])) ||
            (!password.match(passwordPattern) &&
              h('div', { class: 'input-wrapper__error-message' }, [
                'Пароль должен содержать минимум 1 символ верхнего регистра, цифру от 1-9 и символ !@$#% ',
              ]))
          : false,
      ]),
      h('div', { class: 'input-wrapper' }, [
        h('label', {}, [
          h('input', {
            class: 'input',
            name: 'confirmPassword',
            type: 'password',
            value: confirmPassword,
            placeholder: 'Подтверждение пароля',
            oninput: handleOnChange,
          }),
        ]),
        isShowValidMessages
          ? (!confirmPassword.length &&
              h('div', { class: 'input-wrapper__error-message' }, ['Пожалуйста укажите пароль'])) ||
            (password !== confirmPassword &&
              h('div', { class: 'input-wrapper__error-message' }, ['Пароли не совпадают укажите пароль']))
          : false,
      ]),
      h('button', { type: 'button', onclick: handleOnSubmit, class: 'button' }, ['Отправить']),
    ]),
  ]);
};

let app = patch(RegistrationForm(store), root);

store.onStateChanged = () => {
  patch(RegistrationForm(store), app);
};
