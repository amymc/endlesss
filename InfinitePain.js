var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} = ReactNative;

var InfinitePain= React.createClass({
  componentWillMount() {
    fetch("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=carousel", {method: "GET"})
      .then((response) => response.json())
      .then(function(responseData) {
        this.imageUrl = responseData.data.fixed_height_downsampled_url;
        this.setState({imageUrl: this.imageUrl});
      }.bind(this));
      console.log('this.imageUrl', this.imageUrl);
  },

  render: function() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: this.imageUrl}}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1
  }
});


module.exports = InfinitePain;
