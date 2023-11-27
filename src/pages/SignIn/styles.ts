import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background-color: #F4F0FF;
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.Image`
  margin-top: 25px;
  margin-bottom: 20px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
`;
export const Input = styled.TextInput`
  background-color: #FFF;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  color: #121212;
`;
export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 8px;
  background-color: #3b3dbf;
  align-items: center;
  justify-content: center;
`;
export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFF;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 10px 0 10px 0;
  padding: 10px;
`;
export const LinkText = styled.Text`
  color: #171717;
`;