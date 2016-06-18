var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  Animated,
  Navigator,
  NavigatorIOS,
  PanResponder,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} = ReactNative;

var Intro = require('./Intro');

var endlesss = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Endlesss',
          component: Intro,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('endlesss', () => endlesss);

module.exports = endlesss;
