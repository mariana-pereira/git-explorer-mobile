import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, SetStateAction,useEffect, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(() => {
    let storageValue;

    AsyncStorage.getItem(key).then((value) => {
      storageValue = value;
    });

    if (storageValue) {
      return JSON.parse(storageValue);
    }
    return initialState;
  });

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
