import styled from 'styled-components/native';

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: #F0F4FF;
`;

export const ListBalance = styled.FlatList`
  max-height: 190px;
  margin-bottom: 20px;
`;

export const Area = styled.View`
  background-color: #FFF;
  border-radius: 15px 15px 0 0;
  flex-direction: row;
  padding: 14px 14px 10px 14px;
  align-items: top;
`;
export const Title = styled.Text`
  margin-left: 4px;
  color: #121212;
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 18px;
`;
export const List = styled.FlatList`
  flex: 1;
  background-color: #FFF;
`;