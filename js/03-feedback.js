import throttle from 'lodash/throttle';

const emailInput = document.querySelector('input[type=email]');
const messageInput = document.querySelector('textarea[name=message]');
const btnSubmit = document.querySelector('button[type=submit]');

// ------container for local storage-----------
const userInfo = {
  email: '',
  message: '',
};

const getLocalStorage = localStorage.getItem('feedback-form-state');

// ----------event listeners--------
emailInput.addEventListener('input', throttle(onEmailType, 500));
messageInput.addEventListener('input', throttle(onMessageType, 500));
btnSubmit.addEventListener('click', onButtonSubmit);

filledForm();
// -------------local storege data save---------
function onEmailType() {
  userInfo.email = emailInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
}

function onMessageType() {
  userInfo.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userInfo));
}

// ----------submit button-----------
//делаем переменную для хранения отправленных данных,
// записываем в нее данные из хранилища по нажатию кнопки,
//очищаем хранилище и форму

function onButtonSubmit(e) {
  e.preventDefault();
  const userInfoSubmited = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('user info submited: ', userInfoSubmited);

  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  //   form.reset();
}

// ----------local storage check if saved ----------

function filledForm() {
  if (getLocalStorage) {
    emailInput.value = JSON.parse(getLocalStorage).email;
    messageInput.value = JSON.parse(getLocalStorage).message;
    console.log(
      `в хранилище осталось email = ${JSON.parse(getLocalStorage).email} и message = ${
        JSON.parse(getLocalStorage).message
      }`,
    );
  }
}
