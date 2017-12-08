import React from 'react';
import { Image } from 'react-native';

import { Container } from './components/Container';
import { Header } from './components/Text';
import { Input as TextInput } from './components/TextInput';
import { Button } from './components/Button';

const Exercise3 = () => (
  <Container>
    <Header>Welcome to Gaze</Header>
    <Image
      source={require('./assets/planet.png')}
      resizeMode="contain"
      style={{ height: 130, marginBottom: 60, marginTop: 60 }}
    />
    <TextInput
      placeholder="email"
    />
    <TextInput
      placeholder="password"
      secureTextEntry
    />
    <Button>
      Sign in
    </Button>
  </Container>
);

export default Exercise3;
