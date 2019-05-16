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

export default class App extends Component<Props> {

  constructor () {
    super()
    // this.animatedValue = new Animated.Value(0)
    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
    this.fadeOut = this.fadeOut.bind(this);
  }

  componentDidMount () {
    this.fadeIn()
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

  fadeIn () {
    Animated.timing(          // Animate over time
      this.state.fadeAnim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
        easing: Easing.linear
      }
    ).start(() => this.fadeOut());            
  }

  fadeOut() {
    this.setState({ fadeAnim: new Animated.Value(1) },
    () => {
      Animated.timing(          // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0,           // Animate to opacity: 1 (opaque)
          duration: 1000,       // 2000ms
          easing: Easing.linear
        }
      ).start(() => this.fadeIn());
    })              // Starts the animation
  }


render () {
  let { fadeAnim } = this.state;

  // const spin = this.spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg']
  // });

  // const marginLeft = this.animatedValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 400]
  // })
  // const opacity = this.animatedValue.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [0, 1, 0]
  // })
  // const movingMargin = this.animatedValue.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [0, 300, 0]
  // })
  // const textSize = this.animatedValue.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: [18, 32, 18]
  // })
  // const rotateX = this.animatedValue.interpolate({
  //   inputRange: [0, 0.5, 1],
  //   outputRange: ['0deg', '180deg', '0deg']
  // })

  return (
    <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>
      <View style={{ flexDirection: 'row' }}>
        {/* Square */}
        <View style={{ backgroundColor: '#dfdfdf' }}>
          <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
            <View style = {{ backgroundColor: '#c8c8c8', height: 100, width: 100 }}>
            </View>
          </Animated.View>
        </View>

        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent' }}>
        {/* Rectangle */}
          <View style={{ backgroundColor: '#dfdfdf', marginLeft: 5 }}>
            <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
              <View style = {{ backgroundColor: '#c8c8c8', height: 15 }}>
              </View>
            </Animated.View>
          </View>

          <View style={{ backgroundColor: '#dfdfdf', marginLeft: 5, marginTop: 10 }}>
            <Animated.View style={{ ...this.props.style,  opacity: fadeAnim }} >
              <View style = {{ backgroundColor: '#c8c8c8', height: 15 }}>
              </View>
            </Animated.View>
          </View>

          <View style={{ backgroundColor: '#dfdfdf', marginLeft: 5, marginTop: 10 }}>
            <Animated.View style={{ ...this.props.style,  opacity: fadeAnim }} >
              <View style = {{ backgroundColor: '#c8c8c8', height: 15 }}>
              </View>
            </Animated.View>
          </View>

          <View style={{ backgroundColor: '#dfdfdf', marginLeft: 5, marginTop: 10 }}>
            <Animated.View style={{ ...this.props.style,  opacity: fadeAnim }} >
              <View style = {{ backgroundColor: '#c8c8c8', height: 15 }}>
              </View>
            </Animated.View>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ backgroundColor: '#dfdfdf', borderRadius: 50 }}>
          <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
            <View style = {{ backgroundColor: '#c8c8c8', height: 100, width: 100, borderRadius: 50 }}>
            </View>
          </Animated.View>
        </View>
      </View>
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
