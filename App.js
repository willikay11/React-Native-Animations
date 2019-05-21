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
import {Button, Header, Left, Right, Icon, Body, Title, Thumbnail} from 'native-base';
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
      6000
    );
  }

  render () {

    const { loading } = this.state;

    return (
      <View style={styles.container}>
        <Header androidStatusBarColor={'#FFA433'} iosBarStyle="light-content"
          style={{ backgroundColor: '#fff' }}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{  color: '#FFA433' }}>Home</Title>
          </Body>
        </Header>

        <View style={{ padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column'}}>
              <SkeletonLoader type="square" size={110} loading={loading} color='#ffa433' highlightColor='#ffd199' style={{ borderRadius: 10 }}>
                <Image
                  style={{width: 90, height: 90, alignSelf:'center'}}
                  source={require('./images/truck.png')}
                  resizeMode="contain"
                />
              </SkeletonLoader>
            </View>
            <View style={{ flex: 2, flexDirection: 'column'}}>
              <SkeletonLoader type="rectangle" rows={3} height={10} loading={loading} style={{ width: '50%' }} color='#ffa433' highlightColor='#ffd199'>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Luxembourg to Brussels</Text>
                <Text style={{ fontWeight: '300', fontSize: 14 }}>Location: Luxembourg</Text>
                <Text style={{ fontWeight: '300', fontSize: 14 }}>Distance: 1,200 Kms</Text>
              </SkeletonLoader> 
              <SkeletonLoader type="custom" loading={loading} color='#FFA433' highlightColor='#ffd199' style={{ height: 35, width: '100%', borderRadius: 2 }}>
                  <Button 
                      block 
                      light
                      style={{ marginTop: 10, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#FFA433', elevation: 0, height: 30}}>
                      <Text style={{ color: '#FFA433', fontSize: 12 }}>Make a bid</Text>
                  </Button>
                </SkeletonLoader>
            </View>
        </View>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'column'}}>
              <SkeletonLoader type="square" size={110} loading={loading}>
              <Image
                style={{width: 90, height: 90, alignSelf:'center'}}
                source={require('./images/truck.png')}
                resizeMode="contain"
              />
              </SkeletonLoader>
            </View>
            <View style={{ flex: 2, flexDirection: 'column'}}>
              <SkeletonLoader type="rectangle" rows={3} height={10} loading={loading} style={{ borderRadius: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Luxembourg to Brussels</Text>
                <Text style={{ fontWeight: '300', fontSize: 14 }}>Location: Luxembourg</Text>
                <Text style={{ fontWeight: '300', fontSize: 14 }}>Distance: 1,200 Kms</Text>
              </SkeletonLoader>
              <SkeletonLoader type="custom" loading={loading} style={{ height: 35, width: '100%', borderRadius: 2 }}>
                <Button 
                    block 
                    light
                    style={{ marginTop: 10, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#FFA433', elevation: 0, height: 30}}>
                    <Text style={{ color: '#FFA433', fontSize: 12 }}>Make a bid</Text>
                </Button>
              </SkeletonLoader>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'column'}}>
              <SkeletonLoader type="square" size={110} loading={loading}>
                <Image
                  style={{width: 90, height: 90, alignSelf:'center'}}
                  source={require('./images/truck.png')}
                  resizeMode="contain"
                />
              </SkeletonLoader>
            </View>
            <View style={{ flex: 2, flexDirection: 'column'}}>
              <SkeletonLoader type="rectangle" rows={3} height={10} loading={loading}>
                <Text style={styles.boldText}>Luxembourg to Brussels</Text>
                <Text style={styles.normalText}>Location: Luxembourg</Text>
                <Text style={styles.normalText}>Distance: 1,200 Kms</Text>
              </SkeletonLoader>
              <SkeletonLoader type="custom" loading={loading} style={{ height: 35, width: '100%', borderRadius: 2 }}>
                <Button 
                    block 
                    light
                    style={{ marginTop: 10, backgroundColor: 'transparent', borderWidth: 1, borderColor: '#FFA433', elevation: 0, height: 30}}>
                    <Text style={{ color: '#FFA433', fontSize: 12 }}>Make a bid</Text>
                </Button>
              </SkeletonLoader>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <View style={{ flex: 1, flexDirection: 'column'}}>
              <SkeletonLoader type="circle" size={110} loading={loading} >
                <Thumbnail large source={require('./images/avatar-teen.jpg')} />
              </SkeletonLoader>
            </View>

            <View style={{ flex: 2, flexDirection: 'column'}}>
              <SkeletonLoader type="rectangle" rows={2} height={10} loading={loading}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>John Doe</Text>
                <Text style={{ fontWeight: '300', fontSize: 14 }}>Email: john.doe@gmail.com</Text>
              </SkeletonLoader> 
            </View>  
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button :{
    marginTop: 10, 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    borderColor: '#FFA433', 
    elevation: 0, 
    height: 30
  },
  buttonText: {
    color: '#FFA433', 
    fontSize: 12
  },
  boldText: {
    fontWeight: 'bold', 
    fontSize: 16 
  },
  normalText: {
    fontWeight: '300',
    fontSize: 14
  }
});
