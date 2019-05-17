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

const defaultRows = 1;
const defaultColor = '#dfdfdf';
const defaultCircleSize = 100;
const defaultSquareSize = 100;
const defaultRectangleHeight = 15;

export default class Skeleton extends Component {

  constructor () {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }
    this.fadeOut = this.fadeOut.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
  }

  componentDidMount () {
    this.fadeIn();
  }

  fadeIn () {
    Animated.timing(          // Animate over time
      this.state.fadeAnim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 1000,       // 2000ms
        easing: Easing.linear
      }
    ).start(this.fadeOut);            
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
      ).start(this.fadeIn);
    })              // Starts the animation
  }


  render () {
    let { fadeAnim } = this.state;

    let { type, size, color, height, rows } = this.props;

    let rectangles = [];

    if (type === 'square') {
        return (
            <Square fadeAnim={fadeAnim} color={color ? color : defaultColor} size={size ? parseInt(size, 10) : defaultSquareSize} />
        );
    }

    if (type === 'circle') {
        return (
            <Circle fadeAnim={fadeAnim} color={color ? color : defaultColor} size={size ? parseInt(size, 10) : defaultCircleSize} />
        );  
    }

    if (type === 'rectangle') {
        let rowCount = defaultRows;

        if (rows > 0) {
            rowCount = parseInt(rows);
        }

        for (let i = 0; i < rowCount; i++) {
            rectangles.push(<Rectangle key={i} fadeAnim={fadeAnim} color={color ? color : defaultColor} height={height ? parseInt(height, 10) : defaultRectangleHeight} />);
        }

        return rectangles;
    }
  }
}

 Square = (props) => {
  return (
    <View style={{ backgroundColor: props.color, height: props.size, width: props.size }}>
      <Animated.View style={{ ...props.style, opacity: props.fadeAnim }} >
        <View style = {{ backgroundColor: lightenOrDarkenColor(props.color, -20), height: props.size, width: props.size }}>
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
    <View style={{ backgroundColor: props.color, height: props.size, width: props.size, borderRadius: parseInt(props.size, 10)/2 }}>
        <Animated.View style={{ ...props.style, opacity: props.fadeAnim }} >
            <View style = {{ backgroundColor: lightenOrDarkenColor(props.color, -20), height: props.size, width: props.size, borderRadius: parseInt(props.size, 10)/2 }}>
            </View>
        </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150
  }
});
