import React, {createContext, useState} from 'react';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';

export const AuthContext = createContext({});

export default function AuthProvider({children}) {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const signUp = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> => {
    setLoading(true);
    try {
      const payload = {name, email, password};
      await api.post('/users', payload);
      setLoading(false);
      navigation.goBack();
    } catch (error) {
      setLoading(false);
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
    setLoading(true);
    try {
      const payload = {email, password};
      const {
        data: {id, name, token},
      } = await api.post('/login', payload);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setUser({id, name, email});
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('Erro ao tentar logar: ', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{signed: !!user, user, signUp, signIn, loading}}>
      {children}
    </AuthContext.Provider>
  );
}
