import {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../contexts/auth';

import Header from '../../components/Header';

export default function Home() {
  const {user, logOut} = useContext(AuthContext);
  return (
    <View>
      <Header title='Minhas movimentações' />
      <Text>Home</Text>
      <Text>Nome: {user.name}</Text>
      <Button 
        title='Sair'
        onPress={logOut} 
      />
    </View>
  );
}
