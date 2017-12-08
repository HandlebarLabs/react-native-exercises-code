import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  screen1: {
    flex: 1,
    backgroundColor: '#BAD9B5',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  screen2: {
    flex: 1,
    backgroundColor: '#ABA361',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  screen3: {
    flex: 1,
    backgroundColor: '#732C2C',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    color: '#ffffff'
  },
});

class Exercise9 extends Component {
  render() {
    return (
      <View style={styles.screen1}>
        <Text style={styles.text}>Screen 1</Text>
      </View>
    );
  }
}

export default Exercise9;
