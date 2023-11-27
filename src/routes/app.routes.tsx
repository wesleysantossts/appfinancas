import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../pages/Home';
const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
  const screens = [{name: 'Home', component: Home}];
  return (
    <AppDrawer.Navigator>
      {screens.map((item, index) => (<AppDrawer.Screen key={index} {...item} />))}
    </AppDrawer.Navigator>
  );
}
