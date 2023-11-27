import React, {useContext, useState} from 'react';
import {Platform, ActivityIndicator} from 'react-native';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';
import {AuthContext} from '../../contexts/auth';

export default function SignUp() {
  const {user, signUp, loading} = useContext(AuthContext);
  const [signupUser, setSignupUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = () => {
    if (
      signupUser.name === '' ||
      signupUser.email === '' ||
      signupUser.password === ''
    ) {
      return;
    }
    signUp(signupUser);
  };

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : null} enabled>
        <AreaInput>
          <Input
            placeholder="Seu nome"
            value={signupUser.name}
            onChangeText={text => setSignupUser(old => ({...old, name: text}))}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="E-mail"
            value={signupUser.email}
            onChangeText={text => setSignupUser(old => ({...old, email: text}))}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            secureTextEntry={true}
            value={signupUser.password}
            onChangeText={text =>
              setSignupUser(old => ({...old, password: text}))
            }
          />
        </AreaInput>
        <SubmitButton onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator size={20} color={'#FFF'} />
          ) : (
            <SubmitText>Cadastrar</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
