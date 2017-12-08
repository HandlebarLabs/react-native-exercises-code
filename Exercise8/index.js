import React from 'react';
import { View, Button } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

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

const GenericStack = (Name, title) => (
  StackNavigator({
    [Name]: {
      screen: (props) => <GenericScreen {...props} title={title} Name={Name} />,
      navigationOptions: ({ navigation }) => ({
        headerTitle: title,
        headerLeft: (
          <Button
            title="Drawer"
            onPress={() => navigation.navigate('DrawerToggle')}
          />
        )
      }),
    },
    [`${Name}+1`]: {
      screen: View,
      navigationOptions: {
        headerTitle: `${title}+1`
      },
    },
  })
)

const HomeTabs = TabNavigator({
  Home: {
    screen: GenericStack('Home', 'Home'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={28} color={tintColor} />
      )
    },
  },
  Browse: {
    screen: GenericStack('Browse', 'Browse'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-browsers" size={28} color={tintColor} />
      )
    },
  },
  Search: {
    screen: GenericStack('Search', 'Search'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-search" size={28} color={tintColor} />
      )
    },
  },
  Radio: {
    screen: GenericStack('Radio', 'Radio'),
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-radio-outline" size={28} color={tintColor} />
      )
    },
  },
});

const Drawer = DrawerNavigator({
  Home: {
    screen: HomeTabs,
  },
  YourDailyMix: {
    screen: GenericStack('YourDailyMix', 'Your Daily Mix'),
    navigationOptions: {
      drawerLabel: 'Your Daily Mix'
    },
  },
  RecentlyPlayed: {
    screen: GenericStack('RecentlyPlayed', 'Recently Played'),
    navigationOptions: {
      drawerLabel: 'Recently Played'
    },
  },
  Songs: {
    screen: GenericStack('Songs', 'Songs'),
  },
  Albums: {
    screen: GenericStack('Albums', 'Albums'),
  },
  Artists: {
    screen: GenericStack('Artists', 'Artists'),
  },
});

const SettingsStack = StackNavigator({
  Settings: {
    screen: View,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Settings',
      headerRight: (
        <Button
          title="Close"
          onPress={() => navigation.goBack(null)}
        />
      )
    }),
  },
});

const RootNavigator = StackNavigator({
  Primary: {
    screen: Drawer,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default RootNavigator;
