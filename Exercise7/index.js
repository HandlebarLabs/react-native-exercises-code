import React, { Component } from 'react';
import { SafeAreaView, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Challenge7 extends Component {
  state = {}

  handlePress = () => {
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.handlePress}>
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
      </TouchableOpacity>
    );
  }
}

export default Challenge7;
