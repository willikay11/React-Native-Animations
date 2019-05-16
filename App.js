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

function lightenOrDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

export default class App extends Component<Props> {

  constructor () {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
    this.fadeOut = this.fadeOut.bind(this);
  }

  componentDidMount () {
    this.fadeIn()
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
          <Square fadeAnim={fadeAnim} color={'#dfdfdf'} height={100} width={100} />

          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'transparent' }}>
            <Rectangle fadeAnim={fadeAnim} color={'#dfdfdf'} height={15} />
            <Rectangle fadeAnim={fadeAnim} color={'#dfdfdf'} height={15} />
            <Rectangle fadeAnim={fadeAnim} color={'#dfdfdf'} height={15} />
            <Rectangle fadeAnim={fadeAnim} color={'#dfdfdf'} height={15} />
            <Rectangle fadeAnim={fadeAnim} color={'#dfdfdf'} height={15} />
          </View>
        </View>

        <Circle fadeAnim={fadeAnim} color={'#dfdfdf'} size={100} />
      </View>
    );
  }
}

const Square = (props) => {
  return (
    <View style={{ backgroundColor: props.color, height: props.height, width: props.width }}>
      <Animated.View style={{ ...props.style, opacity: props.fadeAnim }} >
        <View style = {{ backgroundColor: lightenOrDarkenColor(props.color, -20), height: props.height, width: props.width }}>
        </View>
      </Animated.View>
    </View>
  );
}

const Rectangle = (props) => {
  return (       
    <View style={{ backgroundColor: props.color, marginLeft: 5, marginBottom: 10 }}>
      <Animated.View style={{ ...props.style,  opacity: props.fadeAnim }} >
        <View style = {{ backgroundColor: lightenOrDarkenColor(props.color, -20), height: props.height }}>
        </View>
      </Animated.View>
    </View>
  );
}

const Circle = (props) => {
  return (
    <View style={{ flexDirection: 'row'}}>
      <View style={{ backgroundColor: props.color, borderRadius: 50 }}>
        <Animated.View style={{ ...props.style, opacity: props.fadeAnim }} >
          <View style = {{ backgroundColor: lightenOrDarkenColor(props.color, -20), height: props.size, width: props.size, borderRadius: parseInt(props.size, 10)/2 }}>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
});
