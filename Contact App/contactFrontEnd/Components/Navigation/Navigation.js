import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Ionicons, MatterialCommunityIcons} from '@expo/vector-icons';

// imports de mes composants de navigation
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';

// imports de mes screens au sein de mon composant App et de ma navigation

import FavScreen from '../Screens/FavScreen';
import HomeScreen from '../Screens/HomeScreen';
import ContactScreen from '../Screens/ContactScreen';
import AddContactScreen from '../Screens/AddContactScreen';

// création de ma bottom navigation
const MainNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Contact: ContactScreen,
  Fav: FavScreen,
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      var iconName;
      var outline = (focused)
        ? ''
        : ''
        // : '-outline';
      if (navigation.state.routeName == 'Contact') {
        iconName = 'ios-information-circle';
      } else if (navigation.state.routeName == 'Contact') {
        iconName = 'ios-search';
      } else if (navigation.state.routeName == '') {
        iconName = 'ios-search';
      } else if (navigation.state.routeName == 'Fav') {
        iconName = 'ios-people';
      }

      return <Ionicons name={iconName + outline} size={25} color={tintColor}/>;
    }
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray'
  }
});

// Création de ma navigation globale qui content à la fois mes pages non contenues dans la bottom navigation et les pages de la bottom navigation
var StackNavigator = createStackNavigator({
  // pages de ma navigation sans bottom

  Home: HomeScreen,
  AddContact: AddContactScreen,
  Contact: ContactScreen,
  Fav: FavScreen,

  // pages de ma navigation avec le bottom créés juste avant
  MainNavigator: MainNavigator
}, {headerMode: 'none'})

export default Navigation = createAppContainer(StackNavigator);
