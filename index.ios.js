/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Braintree from './Braintree.ios.js';

// you can use the sample token from https://developers.braintreepayments.com/start/hello-client/ios/v4
const clientToken = '';

Braintree.setup(clientToken);

class MyBraintreeDemo extends Component {
  _onPressButton() {
    Braintree.showPaymentViewController(function(err, nonce) {
      //callback after the user completes (or cancels) the flow.
      //with the nonce, you can now pass it to your server to create a charge against the user's payment method
      fetch('http://localhost:3000/pay', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({payment_method_nonce: nonce})
      }).done();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Launch</Text>
        </TouchableHighlight>
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
});

AppRegistry.registerComponent('MyBraintreeDemo', () => MyBraintreeDemo);
