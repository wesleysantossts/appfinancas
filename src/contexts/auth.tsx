import React, {createContext, useState, useEffect} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(false);

  const signUp = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    setLoadingAuth(true);
    try {
      const payload = {name, email, password};
      await api.post('/users', payload);
      setLoadingAuth(false);
      navigation.goBack();
    } catch (error) {
      setLoadingAuth(false);
      console.log('Erro ao tentar criar o cadastro: ', error);
    }
  };

  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoadingAuth(true);
    try {
      const payload = {email, password};
      const {
        data: {id, name, token},
      } = await api.post('/login', payload);

      await AsyncStorage.setItem('@finApp', token);
      api.defaults.headers['Authorization'] = `Bearer ${token}`;

      setUser({id, name, email});
      setLoadingAuth(false);
    } catch (error) {
      setLoadingAuth(false);
      console.log('Erro ao tentar logar: ', error);
    }
  };

  const loadingStorage = async () => {
    setLoading(true);
    const storageToken = await AsyncStorage.getItem('@finApp');

    if (storageToken) {
      const {data} = await api.get('/me', {
        headers: {
          'Authorization': `Bearer ${storageToken}`,
        }
      })
      .catch(error => setUser(null));

      api.defaults.headers['Authorization'] = `Bearer ${storageToken}`;
      setUser(data);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadingStorage();
  }, [])

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, loadingAuth, loading}}>
      {children}
    </AuthContext.Provider>
  );
}
