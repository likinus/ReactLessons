import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyDN_CBGIUPG4NKKA6ZGh1p0xDY1LSX4zKo',
  authDomain: 'reacttest-697a5.firebaseapp.com',
  databaseURL: 'https://reacttest-697a5.firebaseio.com',
  projectId: 'reacttest-697a5',
  storageBucket: 'reacttest-697a5.appspot.com',
  messagingSenderId: '690536690288',
  appId: '1:690536690288:web:757588b1a307f991883ab5',
});

export const firestore = app.firestore();

export function docToObjsect(doc) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export function collectionToObject(collection) {
  return collection.docs.map(docToObjsect);
}
