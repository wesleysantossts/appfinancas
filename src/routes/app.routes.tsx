import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  const screens = [
    {
      name: 'Home', 
      component: Home,
      options: {
        headerShown: false,
        drawerStyle: {
          backgroudColor: '#FFF',
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: '#3b3dbf',
        drawerActiveTintColor: '#FFF',

        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212',
      },
    },
  ];
  return (
    <AppDrawer.Navigator>
      {screens.map((item, index) => (<AppDrawer.Screen key={index} {...item} />))}
    </AppDrawer.Navigator>
  );
}
