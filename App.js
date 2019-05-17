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

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    setTimeout(
      function() {
          this.setState({loading: false});
      }
      .bind(this),
      5000
    );
  }

  render () {

    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'column'}}>
            <SkeletonLoader type="square" size="110" loading={loading}>
            <Image
              style={{width: 110, height: 110}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            </SkeletonLoader>
          </View>
          <View style={{ flex: 2, flexDirection: 'column'}}>
            <SkeletonLoader type="rectangle" rows="3" height="10" loading={loading}>
              <Text>Platform: React Native</Text>
              <Text>Version: 0.59</Text>
              <Text>Company: Facebook</Text>
            </SkeletonLoader>    
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 1, flexDirection: 'column'}}>
            <SkeletonLoader type="square" size="110" loading={loading}>
            <Image
              style={{width: 110, height: 110}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            </SkeletonLoader>
          </View>
          <View style={{ flex: 2, flexDirection: 'column'}}>
            <SkeletonLoader type="rectangle" rows="3" height="10" loading={loading}>
              <Text>Platform: React Native</Text>
              <Text>Version: 0.59</Text>
              <Text>Company: Facebook</Text>
            </SkeletonLoader>    
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 1, flexDirection: 'column'}}>
            <SkeletonLoader type="square" size="110" loading={loading}>
            <Image
              style={{width: 110, height: 110}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
            </SkeletonLoader>
          </View>
          <View style={{ flex: 2, flexDirection: 'column'}}>
            <SkeletonLoader type="rectangle" rows="3" height="10" loading={loading}>
              <Text>Platform: React Native</Text>
              <Text>Version: 0.59</Text>
              <Text>Company: Facebook</Text>
            </SkeletonLoader>    
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <SkeletonLoader type="circle" size="110" loading={loading}>
            <Image
                style={{width: 110, height: 110}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
            />
          </SkeletonLoader>
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
