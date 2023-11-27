import {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../contexts/auth';

export default function Home() {
  const {user, logOut} = useContext(AuthContext);
  return (
    <View>
      <Text>Home</Text>
      <Text>Nome: {user.name}</Text>
      <Button 
        title='Sair'
        onPress={logOut} 
      />
    </View>
  );
}
