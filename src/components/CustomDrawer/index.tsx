import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, {useContext} from 'react';
import { Image, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props) {
  const {user, logOut} = useContext(AuthContext);
  return(
    <DrawerContentScrollView {...props}>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25}}>
        <Image 
          source={require('../../assets/Logo.png')}
          style={{width: 90, height: 90}}
          resizeMode='contain'
        />

        <Text style={{fontSize: 18, marginTop: 14}}>
          Bem-vindo
        </Text>

        <Text
          style={{fontSize: 17, fontWeight: 'bold', marginBottom: 14, paddingHorizontal: 20}}
          numberOfLines={1}
        >
          {user && user.name}
        </Text>
      </View>

      <DrawerItemList {...props} />
      <DrawerItem 
        {...props}
        label='Sair do app'
        onPress={() => logOut()}
      />
    </DrawerContentScrollView>  
  )
}