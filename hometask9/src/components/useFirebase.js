import { useState, useEffect } from 'react';
import { firestore, docToObject, collectionToObject } from 'firebase';

export function useFirebase(path, isDoc) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const reference = isDoc ? firestore.doc(path) : firestore.collection(path);

        const response = await reference.get();

        setData(isDoc ? docToObject(response) : collectionToObject(response.docs));
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return [data, isLoading, error];
}

export function useDoc(path) {
  return useFirebase(path, true);
}

export function useCollection(path) {
  return useFirebase(path, false);
}
