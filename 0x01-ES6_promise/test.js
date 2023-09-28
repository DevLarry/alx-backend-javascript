function handleResponseFromAPI(promise = Promise.reject()) {
  promise
    .then(() => console.log('Got a response from the API'))
    .catch(() => new Error());
}

handleResponseFromAPI();
