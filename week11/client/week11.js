import Auth from './auth.js';
import { Errors, makeRequest } from './authHelpers.js';
// makeRequest('login', 'POST', {
//   password: 'user1',
//   email: 'user1@email.com'
// });

const myErrors = new Errors('errors');
const myAuth = new Auth(myErrors);

const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
  myAuth.login(getPosts);
});
async function getPosts() {
  try {
    const data = await makeRequest('posts', 'GET', null, myAuth.token);
    // make sure the element is shown
    document.getElementById('content').classList.remove('hidden');
    console.log(data);
    var ul = document.getElementById('list');
    ul.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data[i].title));
      ul.appendChild(li);
    }
    myErrors.clearError();
  } catch (error) {
    // if there were any errors display them
    myErrors.handleError(error);
  }
}
document.getElementById('createSubmit').addEventListener('click', () => {
  createPost();
});
async function createPost() {
  const form = document.forms.postForm;
  console.dir(form);
  if (form.title.validity.valid && form.content.validity.valid) {
    myErrors.clearError();
    const data = {
      title: form.title.value,
      content: form.content.value
    };
    try {
      const res = await makeRequest('posts', 'POST', data, myAuth.token);
      console.log('Post create:', data);
      form.title.value = '';
      form.content.value = '';
      getPosts();
    } catch (error) {
      myErrors.handleError(error);
    }
  } else {
    myErrors.displayError({ message: 'Title and Content are required' });
  }
}


const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('username');
const emailError = document.querySelector('#username + span.error');

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if(!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}