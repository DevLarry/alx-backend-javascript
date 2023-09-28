export default function handleResponseFromAPI(promise = Promise.reject()) {
  return promise
    .then(() => console.log('Got a response from the API'))
    .catch(() => new Error());
}
