/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul judul="Biodata"/>
      <Judul judul="Login"/>
      <Judul judul="Form"/>
        <Text style={styles.welcome}></Text>
        <Text style={styles.instructions}>Rizal Gradianto</Text>
         <Text style={styles.instructions}>32</Text>
          <Text style={styles.instructions}>XI RPL 1</Text>
        <Image source={require('./rzl.jpg')} style={styles.gambar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3bb2b8',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 5,
  },
  gambar: {
  	width: 200,
  	height : 280,
  },
});
