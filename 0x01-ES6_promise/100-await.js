import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const user = await createUser()
    .then((res) => res)
    .catch(() => null);
  const photo = await uploadPhoto()
    .then((res) => res)
    .catch(() => null);
  return { photo, user };
}
