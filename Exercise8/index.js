import React from 'react';
import { View, Button } from 'react-native';

const GenericScreen = ({ navigation, title, Name }) => (
  <View style={{ flex: 1 }}>
    <Button
      title={`Open ${title}+1`}
      onPress={() => navigation.navigate(`${Name}+1`)}
    />
    <Button
      title="Open Settings"
      onPress={() => navigation.navigate('Settings')}
    />
  </View>
);

export default () => null;
