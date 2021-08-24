import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class INSTA extends React.Component{
  render(){
    return (
      <View>
        <Text styles = {styles.container}> INSTAGRAM </Text>
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
