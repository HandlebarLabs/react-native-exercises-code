import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Animated } from 'react-native';

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
  loadingOverlay: {
    backgroundColor: 'rgba(0,52,89, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 10,
  },
  loadingText: {
    color: '#fff',
    fontWeight: '600',
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
    opacity: new Animated.Value(1),
  }

  onLoadStart = () => {
    this.setState({ loading: true });
  }

  onLoad = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: 500,
    }).start(() => {
      this.setState({ loading :false });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={this.state.imageSource}
            onLoadStart={this.onLoadStart}
            onLoad={this.onLoad}
          />
          {this.state.loading
            ?
              <Animated.View style={[styles.loadingOverlay, { opacity: this.state.opacity }]}>
                <Text style={styles.loadingText}>Loading...</Text>
              </Animated.View>
            : null
          }
        </View>
      </View>
    );
  }
}

export default Exercise6;
