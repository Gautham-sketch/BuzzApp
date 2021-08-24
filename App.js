import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FB from './screens/fb';
import INSTA from './screens/insta';

let TabNavigator = createBottomTabNavigator({
  FaceBook : {screen : FB},
  Instagram : {screen : INSTA},
})

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
