import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FB extends React.Component{
  render(){
    return (
      <View>
        <Text style = {styles.container}> FACEBOOK </Text>
      </View>
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
