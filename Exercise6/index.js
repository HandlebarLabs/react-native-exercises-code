import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

const imageSource = () => {
  const cacheBreaker = `buster=${Math.random()}`;
  const uri = `https://images.unsplash.com/photo-1485832329521-e944d75fa65e?auto=format&fit=crop&w=1000&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D&${cacheBreaker}`
  return { uri };
};

class Exercise6 extends Component {
  state = {
    loading: false,
    imageSource: imageSource(),
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={this.state.imageSource}
          />
        </View>
      </View>
    );
  }
}

export default Exercise6;
