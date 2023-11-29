import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {format} from 'date-fns';

import { Background, ListBalance } from './styles';

import Header from '../../components/Header';
import api from '../../services/api';
import BalanceItem from '../../components/BalanceItem';
import { useIsFocused } from '@react-navigation/native';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  
  const getMovements = async (isActive) => {
    let dateFormated = format(dateMovements, 'dd/MM/yyyy');

    const balance = await api.get('/balance', {
      params: {
        date: dateFormated
      }
    });

    if (isActive) setListBalance(balance.data);
  };

  useEffect(() => {
    let isActive = true;
    getMovements(isActive);
    return () => isActive = false;
  }, [isFocused])


  const {user, logOut} = useContext(AuthContext);
  return (
    <Background>
      <Header title='Minhas movimentações' />
      <ListBalance 
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({item}) => (<BalanceItem data={item} />)}
      />
    </Background>
  );
}
