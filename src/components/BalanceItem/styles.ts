import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #${props => props.bg};
  margin: 0 14px;
  padding: 0 0 0 15px;
  border-radius: 8px;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
`;
export const Label = styled.Text`
  color: #fff;
  font-size: 19px;
  font-weight: bold;
`;
export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #FFF;
`;