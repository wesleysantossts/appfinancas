import React, {useContext} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import AuthRoutes from './auth.routes';
import {AuthContext} from '../contexts/auth';

import AppRoutes from './app.routes';

export default function Routes() {
  const {signed} = useContext(AuthContext);
  const loading = false;
  return signed ? <AppRoutes /> : <AuthRoutes />;
}
