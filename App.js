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
  ReactionToggleIcon,
  ReactionIcon,
  ReactionIconBar,
  RepostIcon, HeartIcon, ReplyIcon
} from 'react-native-activity-feed';

import client from './client.js'
import Icon from 'react-native-ionicons'
import DagActivity from './dagComponents/DagActivity'

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('initial props:', props);
    console.log(client.get_token())
  }

  render(){
    let apiKey = "n6dqxby6gcfa";
    let appId = "49021";
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2FybG9zIn0.wZ9km0IOKEcMfOAVhYs3iYmmJEmeRUKH-VO1QJ1d6No";


    return(
        <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
          <StreamApp
              apiKey={apiKey}
              appId={appId}
              token={token}
          >
            <FlatFeed
              feedGroup="user"
              userId="carlos"
              Activity = {<DagActivity />}
            />
          </StreamApp>
        </SafeAreaView>
    );
  }
}


export default App;
