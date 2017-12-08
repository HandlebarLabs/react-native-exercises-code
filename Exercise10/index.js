import React, { Component } from 'react';
import { View, Button, SafeAreaView, StatusBar } from 'react-native';

class StatusBarDeclarative extends Component {
  componentWillMount() {
    this.updateStatusBar(this.props);
  }

  componentWillUpdate(nextProps) {
    this.updateStatusBar(nextProps);
  }

  updateStatusBar = ({ lightBar = true, visible = true }) => {
    if (lightBar === true) {
      StatusBar.setBarStyle('light-content');
    } else if (lightBar === false) {
      StatusBar.setBarStyle('dark-content');
    }

    StatusBar.setHidden(!visible)
  };

  render() {
    return null;
  }
};

class Exercise10 extends Component {
  state = {
    lightStatusBar: true,
    statusBarVisible: true,
  }

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: '#878E88', flex: 1 }}>
        <StatusBarDeclarative
          visible={this.state.statusBarVisible}
          lightBar={this.state.lightStatusBar}
        />
        <Button
          title="Show/Hide Status Bar"
          onPress={() => this.setState({ statusBarVisible: !this.state.statusBarVisible })}
        />
        <Button
          title="Light/Dark Status Bar"
          onPress={() => this.setState({ lightStatusBar: !this.state.lightStatusBar })}
        />
      </SafeAreaView>
    );
  }
}

export default Exercise10;
