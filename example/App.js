/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SVProgressHUD from 'react-native-svprogresshud';

export default class App extends Component {
  state = {
    status: 'starting',
    message: '--',
  };

  onPress2 = async () => {
    setTimeout(SVProgressHUD.dismiss, 2000);
  };
  onPress3 = async () => {
    // SVProgressHUD.showInfo();
    // SVProgressHUD.showProgress(0.5, 'Loading...');
    // SVProgressHUD.showProgress(0.5);
    // SVProgressHUD.showSuccess('Great Success!');
    if (Platform.OS == 'android') {
      SVProgressHUD.setBackgroundColor(12849);
      SVProgressHUD.setForegroundColor(-1);
      SVProgressHUD.setDefaultMaskType('black');
      SVProgressHUD.setDefaultStyle('custom');
    } else {
      SVProgressHUD.setDefaultStyle('dark');
      SVProgressHUD.setBackgroundColor(12849);
      SVProgressHUD.setForegroundColor(-1);
      SVProgressHUD.setDefaultMaskType('black');
    }
    SVProgressHUD.show('LOADING...');
    setTimeout(SVProgressHUD.dismiss, 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>☆Svprogresshud example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
        <TouchableOpacity onPress={this.onPress3}>
          <Text>Show</Text>
        </TouchableOpacity>
      </View>
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
  mt: {
    marginBottom: 20,
  },
});
