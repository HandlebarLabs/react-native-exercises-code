import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  redBox: {
    backgroundColor: 'red',
    width: 200,
    height: 200,
    flexDirection: 'row',
  },
  blueBox: {
    backgroundColor: 'blue',
    flex: 2,
  },
  greenBox: {
    backgroundColor: 'green',
    flex: 1,
  },
});

const Exercise1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
      </View>
    </View>
  );
};

export default Exercise1;
