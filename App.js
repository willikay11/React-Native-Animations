/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  TouchableOpacity
} from 'react-native'

import SkeletonLoader from './skeleton';

export default class App extends Component {

  constructor () {
    super();
  }

  componentDidMount () {
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column'}}>
            <SkeletonLoader type="square" size="110" />
          </View>
          <View style={{ flex: 2, flexDirection: 'column'}}>
            <SkeletonLoader type="rectangle" rows="5" height="10" />
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <SkeletonLoader type="circle" size="110" />
        </View>  
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  }
});
