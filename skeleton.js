/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';

import {
  Text,
  View,
  Animated,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';

const defaultRows = 1;
const defaultColor = '#dfdfdf';
const defaultHighlightColor = '#c8c8c8';
const defaultCircleSize = 100;
const defaultSquareSize = 100;
const defaultRectangleHeight = 10;
const defaultRectangleWidth = '100%';
const defaultRectangleMargin = 10;

export default class Skeleton extends Component {

  constructor () {
    super();
    this.state = {
      fadeAnim: new Animated.Value(0), 
    }
    this.fadeOut = this.fadeOut.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
  }

  componentDidMount () {
    this.fadeIn();
  }

  fadeIn () {
    Animated.timing(          
      this.state.fadeAnim,
      {
        toValue: 1,           
        duration: 1000,       
        easing: Easing.linear
      }
    ).start(this.fadeOut);            
  }

  fadeOut() {
    this.setState({ fadeAnim: new Animated.Value(1) },
    () => {
      Animated.timing(          
        this.state.fadeAnim, 
        {
          toValue: 0,      
          duration: 1000,    
          easing: Easing.linear
        }
      ).start(this.fadeIn);
    })            
  }


  render () {
    let { fadeAnim } = this.state;

    let { type, size, color, highlightColor, height, width, rows, loading, children, marginBottom, style } = this.props;

    if(style && style.backgroundColor) {
      style = delete style.backgroundColor;
    }

    if (type === 'square') {
      return (
        <Square 
          fadeAnim={fadeAnim} 
          loading={loading} 
          children={children} 
          color={color ? color : defaultColor} 
          highlightColor={highlightColor ? highlightColor : defaultHighlightColor} 
          size={size ? parseInt(size, 10) : defaultSquareSize}
          style={style}
        />
      );
    }

    if (type === 'circle') {
      return (
        <Circle 
          fadeAnim={fadeAnim} 
          loading={loading} 
          children={children} 
          color={color ? color : defaultColor} 
          highlightColor={highlightColor ? highlightColor : defaultHighlightColor} 
          size={size ? parseInt(size, 10) : defaultCircleSize}
          style={style} 
        />
      );  
    }

    if (type === 'rectangle') {
        let rowCount = defaultRows;

        if (rows > 0) {
            rowCount = parseInt(rows);
        }

        return <Rectangle 
          fadeAnim={fadeAnim} 
          loading={loading} 
          children={children} 
          rows={rowCount} 
          color={color ? color : defaultColor}
          highlightColor={highlightColor ? highlightColor : defaultHighlightColor} 
          height={height ? height : defaultRectangleHeight}
          width={width ? width : defaultRectangleWidth}
          margin={marginBottom ? parseInt(marginBottom, 10) : defaultRectangleMargin} 
          style={style}
        />
    }

    if(type === 'custom') {
      return <Custom
        fadeAnim={fadeAnim} 
        loading={loading} 
        children={children} 
        color={color ? color : defaultColor}
        highlightColor={highlightColor ? highlightColor : defaultHighlightColor} 
        style={style}
      />
    }

    return null;
  }
}

const Square = (props) => {
  if (props.loading) {
    return (
      <View style={{ backgroundColor: props.color, height: props.size, width: props.size, ...props.style }}>
        <Animated.View style={{ opacity: props.fadeAnim }} >
          <View style = {{ backgroundColor: props.highlightColor, height: props.size, width: props.size, ...props.style }} />
        </Animated.View>
      </View>
    );
  }

  return props.children ? props.children : null;
}

const Rectangle = (props) => {
  if(props.loading) {

    let newStyle = {};
    let style = {};
    let rectangles = [];

    if (props.style) {
      Object.keys(props.style).forEach(function(key) {
        const found = /margin/.test(key);
        const paddingFound = /padding/.test(key);
        const widthFound = /width/.test(key);

        if (!found && !paddingFound && !widthFound) {
          newStyle[key] = props.style[key];
        }

        if(!paddingFound) {
          style[key] = props.style[key];
        }
      });
    }

    for (let i = 0; i < props.rows; i++) {
      let width = props.width;
      let height = props.height;      

      if(Array.isArray(props.width)) {
        width = props.width[i];
      }

      if(Array.isArray(props.height)) {
        height = props.height[i] != undefined ? props.height[i] : defaultRectangleHeight;
      }

      rectangles.push(
        <View key={i} style={{ backgroundColor: props.color, width, marginBottom: props.margin, ...style }}>
          <Animated.View style={{ opacity: props.fadeAnim }} >
            <View style = {{ backgroundColor: props.highlightColor, height: height, ...newStyle }} />
          </Animated.View>
        </View>
      );
    }
    return rectangles;
  }

  return props.children ? props.children : null;
}

const Circle = (props) => {
  if(props.loading) {
    return (
      <View style={{ backgroundColor: props.color, height: props.size, width: props.size, borderRadius: parseInt(props.size, 10)/2, ...props.style }}>
        <Animated.View style={{ opacity: props.fadeAnim }} >
          <View style = {{ backgroundColor: props.highlightColor, height: props.size, width: props.size, borderRadius: parseInt(props.size, 10)/2, ...props.style }} />
        </Animated.View>
      </View>
    );  
  }

  return props.children ? props.children : null;
}

const Custom = (props) => {
  if(props.loading) {
    return (
      <View style={{ backgroundColor: props.color, ...props.style }}>
        <Animated.View style={{ opacity: props.fadeAnim }} >
          <View style = {{ backgroundColor: props.highlightColor, ...props.style }} />
        </Animated.View>
      </View>
    );
  }

  return props.children ? props.children : null;
}

Skeleton.propTypes = {
  type: PropTypes.oneOf(['rectangle', 'square', 'circle', 'custom']).isRequired,
  loading: PropTypes.bool.isRequired,
  size: PropTypes.number,
  width: PropTypes.array,
  color: PropTypes.string,
  highlightColor: PropTypes.string,
  rows: PropTypes.number,
  marginBottom: PropTypes.number,
  style: PropTypes.object,
}