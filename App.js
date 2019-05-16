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
  Easing
} from 'react-native'


export default class App extends Component<Props> {

  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.animate()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

render () {
  // const spin = this.spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg']
  // });

  const marginLeft = this.animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400]
  })
  const opacity = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 1, 0]
  })
  const movingMargin = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 300, 0]
  })
  const textSize = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [18, 32, 18]
  })
  const rotateX = this.animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '0deg']
  })

  return (
    <View style={styles.container}>
      {/* <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{rotate: spin}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      /> */}

      <View style={{ width: '100%', backgroundColor: '#E2E2E2' }}>
        <Animated.View
          style={{
            marginLeft,
            height: 30,
            width: 10,
            backgroundColor: 'rgba(255, 255, 255, .1)'}} />
      </View>
      <Animated.View
        style={{
          opacity,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'blue'}} />
      <Animated.View
        style={{
          marginLeft: movingMargin,
          marginTop: 10,
          height: 30,
          width: 40,
          backgroundColor: 'orange'}} />
      <Animated.Text
        style={{
          fontSize: textSize,
          marginTop: 10,
          color: 'green'}} >
          Animated Text!
      </Animated.Text>
      <Animated.View
        style={{
          transform: [{rotateX}],
          marginTop: 50,
          height: 30,
          width: 40,
          backgroundColor: 'black'}}>
        <Text style={{color: 'white'}}>Hello from TransformX</Text>
      </Animated.View>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
});
