// const { uploadPhoto, createUser } = require('./utils');

function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
      console.log(data[0].body, data[1].firstName, data[1].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
console.log('Hi');
