import React, {useState} from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import {
  Container,
  ModalContent,
  ButtonFilterText,
  ButtonFilter
} from './styles';
import { Calendar, LocaleConfig } from 'react-native-calendars';

export default function CalendarModal({setVisible, handleFilter}) {
  const [date, setDate] = useState({now: new Date(), markeddates: {}});

  const handleOnDayPress = async (date: any) => {
    setDate(old => ({...old, now: new Date(date.dateString)}));
    
    let markedDay: any = {};
    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#fff'
    }

    setDate(old => ({...old, markeddates: markedDay}));
  };

  const handleFilterDate = () => {
    handleFilter(date.now);
    setVisible();
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>
      <ModalContent>
        <Calendar 
          onDayPress={handleOnDayPress}
          markedDates={date.markeddates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#fff'
          }}
        />
        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  )
}