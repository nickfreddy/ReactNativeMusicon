import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { StyleSheet } from 'react-native';
import color from '../common/color';
import AppBottom from './AppBottom';
import DrawerCustome from './DrawerCustome';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: styles.drawerContainer,
      }}
      drawerContent={props => (
        <DrawerCustome {...props} />
      )}
    >
      <Drawer.Screen name="Bottom" component={AppBottom} />
    </Drawer.Navigator>
  )
}

export default AppDrawer

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: color.gray3,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  }
})

