import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import color from '../common/color';
import React from 'react'
import Home from '../page/Home';
import Playlist from '../page/Playlist';
import Search from '../page/Search';
import dimension from '../common/dimension';
import TabIcon from '../component/TabIcon';

const Tab = createBottomTabNavigator();

const AppBottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: color.gray2,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          height: dimension.tabBottomHeight,
          position: 'absolute',
          borderTopWidth: 0,
          bottom: 0
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focus={focused} name='Home' />
          }
        }}
      />
      <Tab.Screen name="Search" component={Search} 
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focus={focused} name='Search' />
          }
        }}
      />
      <Tab.Screen name="Playlist" component={Playlist} 
        options={{
          tabBarIcon: ({focused}) => {
            return <TabIcon focus={focused} name='Playlist' />
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default AppBottom
