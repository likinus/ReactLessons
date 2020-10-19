import { initializeApp, useCallback } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyA-R7oq7F2d9flV-L9uwQ6qSOZsi1EWbkc',
  authDomain: 'todos-project-6f01f.firebaseapp.com',
  databaseURL: 'https://todos-project-6f01f.firebaseio.com',
  projectId: 'todos-project-6f01f',
  storageBucket: 'todos-project-6f01f.appspot.com',
  messagingSenderId: '115645119759',
  appId: '1:115645119759:web:1723b6c590099669bd527a',
});

export const firestore = app.firestore();

export function docToObject(doc) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export function collectionToObject(collection) {
  return collection.docs.map(docToObject);
}

export let getData = () => {
  firestore
    .collection('/todos')
    .get()
    .then((snapshot) => snapshot.docs.map(docToObject))
    .then(console.log);
};

export const addData = (descr) => {
  firestore.collection('/todos').add({
    description: descr,
  });
};
// export const add = useCallback((obj) => firestore.collection('/todos').add(obj), []);
