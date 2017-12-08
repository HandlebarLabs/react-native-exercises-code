import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar, KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
});

export const Container = ({ children }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={14}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
);
