import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Regform from './src/components/Regform';

class App extends React.Component() {

  rendor(){
  return (
    <View style={styles.container}>
      <Regform/>

    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {

    flex:1,
    justifyContent:'center',
    backgroundColor:'#36485f',
    paddingLeft:60,
    paddingRight:60,
  },
});
export default App