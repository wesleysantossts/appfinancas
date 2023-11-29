import React, {useState} from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Header from '../../components/Header';
import { Background, Input, SubmitButton, SubmitText } from './styles';
import RegisterTypes from '../../components/RegisterTypes';
import api from '../../services/api';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

export default function New() {
  const [registerInput, setRegisterInput] = useState({description: null, value: null});
  const [type, setType] = useState('receita');

  const navigation = useNavigation();

  const handleAdd = async () => {
    Keyboard.dismiss();

    const payload = {
      description: registerInput.description,
      value: Number(registerInput.value),
      type,
      date: format(new Date(), 'dd/MM/yyyy')
    };
    await api.post('/receive', payload);

    setRegisterInput(old => ({description: null, value: null}));
    navigation.navigate('Home');
  }

  const handleSubmit = async () => {
    Keyboard.dismiss();

    if (isNaN(parseFloat(registerInput.value)) || type === null) {
      alert('Preencha todos os campos');
      return;
    }

    Alert.alert(
      'Confirmando dados',
      `Tipo: ${type[0].toUpperCase() + type.substring(1)} - Valor: R$${parseFloat(registerInput.value)}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleAdd()
        }
      ]
    );
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />
        <SafeAreaView style={{marginTop: 14, alignItems: 'center'}}>
          <Input 
            placeholder='Descrição desse registro'
            value={registerInput.description}
            onChangeText={text => setRegisterInput(old => ({...old, description: text}))} 
          />
          <Input 
            placeholder='Valor desejado' 
            keyboardType='numeric' 
            value={registerInput.value}
            onChangeText={text => setRegisterInput(old => ({...old, value: text}))} 
          />

          <RegisterTypes type={type} sendTypeChanged={(item) => setType(item)} />

          <SubmitButton onPress={handleSubmit}>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}