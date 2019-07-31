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
import { StreamApp } from 'expo-activity-feed';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
      <StreamApp
          apiKey={this.props.apiKey}
          appId={this.props.appId}
          token={this.props.token}
      />
    </SafeAreaView>
  );
};


export default App;
