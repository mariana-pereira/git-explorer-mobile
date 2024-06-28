import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dispatch, SetStateAction,useEffect, useState } from 'react';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): Response<T> {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function persistTheme() {
      const value = await AsyncStorage.getItem(key);

      if (value) setState(JSON.parse(value));
    }
    persistTheme();
  }, [initialState, key]);

  useEffect(() => {
    AsyncStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
