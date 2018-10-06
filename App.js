/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';
import Judul from './components/judul';
import Login from './components/login';
import Footer from './components/footer';
import Biodata from './components/biodata';
import { createStackNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Judul/>
        <View>
      <TextInput
      style={styles.input}
      underlineColorAndroid="rgba(0,0,0,0)"
      placeholder="Username or Email"
      placeholderTextColor="#a8a8a8"
      />
      <TextInput
      style={styles.input}
      underlineColorAndroid="rgba(0,0,0,0)"
      placeholder="Password"
      placeholderTextColor="#a8a8a8"
      />
      <TouchableOpacity style={styles.tombol} onPress={() => this.props.navigation.navigate('Details')}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        Login
        </Text>
      </TouchableOpacity>
      </View>
        <Footer/>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {

static navigationOptions = {
  header: null
}

  render() {
    return (
      <Biodata/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tombol: {
    backgroundColor: 'rgba(91, 201, 157,1.0)',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    backgroundColor: 'rgba(242, 249, 255,1.0)',
    marginBottom: 10,
    width: 310,
    borderRadius: 25,
    paddingHorizontal: 16,
    color: '#FF5757'
  }
});

const RootStack = createStackNavigator({
  Home: App,
  Details: DetailsScreen,
},
{
    initialRouteName: 'Home',
  }
);

export default class Apps extends React.Component {
  render() {
    return <RootStack />;
  }
}
