import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import JoinRoom from '../screens/JoinRoom';
import HostRoom from '../screens/HostRoom';



export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: HostRoom,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/create.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Host Room",
    }
  },
  BookRequest: {
    screen: JoinRoom,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/link.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Join Room",
    }
  }
});