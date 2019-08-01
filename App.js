/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  StreamApp,
  FlatFeed,
  Activity,
  StatusUpdateForm,
  LikeButton,
} from 'react-native-activity-feed';

import client from './client.js'

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('initial props:', props);
    console.log(client.get_token())
  }

  render(){
    return(
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
              apiKey="n6dqxby6gcfa"
              appId="49021"
              userId={client.get_token()}
              token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyZXNvdXJjZSI6IioiLCJhY3Rpb24iOiIqIiwiZmVlZF9pZCI6IioifQ.p31LovjFsSEfSrAv-Np0diPENZ3c21Rfr3nxBFn_ukA"
          />
        </SafeAreaView>
    );
  }
}


export default App;
