import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  const screens = [
    {
      name: 'SignIn',
      component: SignIn,
      options: {
        headerShown: false,
      },
    },
    {
      name: 'SignUp',
      component: SignUp,
      options: {
        headerStyle: {
          backgroundColor: '#3b3dbf',
          borderBottomWidth: 1,
          borderBottomColor: '#00b94a',
        },
        headerTintColor: '#FFF',
        headerTitle: 'Voltar',
        headerBackTitleVisible: false,
      },
    },
  ];

  return (
    <AuthStack.Navigator>
      {screens.map((item, index) => {
        return <AuthStack.Screen key={index} {...item} />;
      })}
    </AuthStack.Navigator>
  );
}
