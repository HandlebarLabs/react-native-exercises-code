import React, { Component } from 'react';
import { View, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Challenge3 extends Component {
  state = {
    people: [],
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(response => this.setState({ people: response.results }))
      .catch(error => alert(error));
  }

  renderItem = ({ item }) => {
    return (
      <ListItem
        title={item.name}
        subtitle={`Birth Year: ${item.birth_year}`}
        hideChevron
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <List containerStyle={{ flex: 1 }}>
          <FlatList
            data={this.state.people}
            renderItem={this.renderItem}
            keyExtractor={item => item.created}
          />
        </List>
      </SafeAreaView>
    );
  }
}

export default Challenge3;
