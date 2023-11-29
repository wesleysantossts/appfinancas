import React, {useContext, useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts/auth';
import {format, setDate} from 'date-fns';

import { Background, ListBalance, Area, Title, List } from './styles';

import Header from '../../components/Header';
import api from '../../services/api';
import BalanceItem from '../../components/BalanceItem';
import { useIsFocused } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricoList from '../../components/HistoricoList';

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([]);
  const [movements, setMovements] = useState(new Date());
  const [dateMovements, setDateMovements] = useState(new Date());
  
  const getMovements = async (isActive) => {
    let dateFormated = format(dateMovements, 'dd/MM/yyyy');

    const receives = await api.get('/receives', {
      params: {
        date: dateFormated
      }
    });

    const balance = await api.get('/balance', {
      params: {
        date: dateFormated
      }
    });

    if (isActive) {
      setMovements(receives.data);
      setListBalance(balance.data);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete('/receives/delete', {params: {item_id: id}});
      setDateMovements(new Date())
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let isActive = true;
    getMovements(isActive);
    return () => isActive = false;
  }, [isFocused, dateMovements])


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

      <Area>
        <TouchableOpacity>
          <Icon name='event' color='#121212' size={30} />
        </TouchableOpacity>
        <Title>Últimas movimentações</Title>
      </Area>

      <List 
        data={movements}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDelete} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </Background>
  );
}
