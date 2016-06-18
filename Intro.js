var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = ReactNative;

var InfinitePain = require('./InfinitePain');

var Intro = React.createClass({
   _handleChangePage() {
    this.props.navigator.push({
      title: "Second Page",
      component: InfinitePain,
    });

  },

  render: function() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to the rest of your life in INIFNITEPAIN!
        </Text>
        <TouchableOpacity onPress={this._handleChangePage}>
          <Text>
            Tap to see whats in store
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
});

 var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = Intro;

