/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Animated,
  PanResponder,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class endlesss extends Component {
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        //console.log('e', e);

      },

      onPanResponderMove: Animated.event([
        // console.log('moving');
      ]),

      onPanResponderRelease: (e, {vx, vy}) => {
        console.log('release');
        fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=carousel", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
          console.log('response', responseData.data.fixed_height_downsampled_url, responseData);
          this.imageUrl = responseData.data.fixed_height_downsampled_url;

        })
        .done();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View {...this._panResponder.panHandlers}>
          <Image source={{ uri: this.imageUrl }}>
            <Text style={styles.welcome}>
              Welcome to the rest of your life!
            </Text>
            <Text style={styles.instructions}>
              Tap to see whats in store
            </Text>
          </Image>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('endlesss', () => endlesss);


