import React, {useContext} from 'react';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Message,
  Name,
  NewLink,
  NewText,
  LogoutButton,
  LogoutText
} from './styles';

export default function Profile() {
  const {user, logOut} = useContext(AuthContext);
  const navigation = useNavigation();
  return(
    <Container>
      <Header title='Meu perfil' />

      <Message>
        Hey, bem-vindo de volta!
      </Message> 

      <Name numberOfLines={1}>
        {user && user.name}
      </Name>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton onPress={logOut}>
        <LogoutText>Sair</LogoutText>
      </LogoutButton>
    </Container>
  )
}