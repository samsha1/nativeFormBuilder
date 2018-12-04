import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.textStyle}>THINGS I LEARNED</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:20,
    height:80,
    backgroundColor: '#a1caf1',
    alignItems: 'center',
    justifyContent:'center'
  },
  textStyle:{
    fontSize:30,
    fontWeight:'bold',
    color:'#fff'
    
  }
});
