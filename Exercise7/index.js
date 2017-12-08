import React, { Component } from 'react';
import { SafeAreaView, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});

class Challenge7 extends Component {
  state = {
    radius: new Animated.Value(0),
  }

  handlePress = () => {
    this.state.radius.setValue(0);
    Animated.timing(this.state.radius, {
      toValue: 200,
      duration: 500,
    }).start();
  }

  render() {
    const opacity = this.state.radius.interpolate({
      inputRange: [0, 200],
      outputRange: [1, 0],
    })
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              styles.circle,
              {
                width: this.state.radius,
                height: this.state.radius,
                opacity,
              }
            ]}
          />
        </SafeAreaView>
      </TouchableOpacity>
    );
  }
}

export default Challenge7;
