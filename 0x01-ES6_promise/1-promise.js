export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, rejected) => {
    if (!success) {
      rejected(Error('The fake API is not working currently'));
      return;
    }
    resolve({ status: 200, body: 'Success' });
  });
}
