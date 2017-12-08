import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333542',
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 23,
    color: '#F9FDFF',
    letterSpacing: 0,
    marginBottom: 12,
    marginTop: 60,
  },
  headerBorder: {
    height: 1,
    backgroundColor: '#575B67',
    width: Dimensions.get('window').width * 0.25,
  },
  input: {
    backgroundColor: '#454754',
    marginHorizontal: 50,
    padding: 14,
    borderRadius: 2,
    marginBottom: 14,
    color: '#EEF1F5',
    fontWeight: '600',
    fontSize: 14,
  },
  touchable: {
    marginHorizontal: 50,
  },
  button: {
    backgroundColor: '#0CD38A',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 2,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    letterSpacing: 0,
  },
});

const Challenge2 = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Welcome to Gaze</Text>
      <View style={styles.headerBorder} />
    </View>

    <Image
      source={require('./assets/planet.png')}
      resizeMode="contain"
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
    />
    <TextInput
      placeholder="email"
      style={styles.input}
      placeholderTextColor="#6D6F7C"
      autoCorrect={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
    />
    <TextInput
      placeholder="password"
      secureTextEntry
      style={styles.input}
      placeholderTextColor="#6D6F7C"
      autoCorrect={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
    />
    <TouchableHighlight
      onPress={() => null}
      style={styles.touchable}
    >
      <View style={styles.button}>
        <Text style={styles.text}>Sign in</Text>
      </View>
    </TouchableHighlight>
  </SafeAreaView>
);

export default Challenge2;
