import React, {useState, useContext} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {
  Background, 
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
  const [signinUser, setSigninuser] = useState({email: null, password: null})
  const navigation = useNavigation();
  const {signIn, loadingAuth} = useContext(AuthContext);

  const handleLogin = () => {
    if (!signinUser.email || !signinUser.password) return;
    signIn(signinUser);
  };

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo 
          source={require('../../assets/Logo.png')}
        />
        
        <AreaInput>
          <Input 
            placeholder="Seu email"
            value={signinUser.email}
            onChangeText={text => setSigninuser(old => ({...old, email: text}))}
          />
        </AreaInput>
        <AreaInput>
          <Input 
            placeholder="Senha"
            secureTextEntry={true}
            value={signinUser.password}
            onChangeText={text => setSigninuser(old => ({...old, password: text}))}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" /> 
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
