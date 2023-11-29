import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
import New from '../pages/New';
const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  const screens = [
    {
      name: 'Home', 
      component: Home,
    },
    {
      name: 'Registrar', 
      component: New,
    },
  ];
  return (
    <AppDrawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#FFF',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      }}
    >
      {screens.map((item, index) => (<AppDrawer.Screen key={index} {...item} />))}
    </AppDrawer.Navigator>
  );
}
