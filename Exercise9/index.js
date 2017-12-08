import React, { Component } from 'react';
import { View, Image, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';
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
  indicatorWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  indicator: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 2,
  },
  indicatorActive: {
    backgroundColor: '#fff',
  },
});

class Swiper extends Component {
  state = {
    activeIndex: 0,
  }

  handleScroll = (e) => {
    const { layoutMeasurement, contentOffset } = e.nativeEvent;
    const activeIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    this.setState({ activeIndex })
  }

  renderIndicators = () => {
    return (
      <View style={styles.indicatorWrapper}>
        {this.props.children.map((value, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              this.state.activeIndex === index ? styles.indicatorActive : {},
            ]}
          />
        ))}
      </View>
    );
  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={this.handleScroll}
          scrollEventThrottle={64}
        >
          {this.props.children}
        </ScrollView>
        {this.renderIndicators()}
      </View>
    );
  }
}

class Exercise9 extends Component {
  render() {
    return (
      <Swiper>
        <View style={styles.screen1}>
          <Text style={styles.text}>Screen 1</Text>
        </View>
        <View style={styles.screen2}>
          <Text style={styles.text}>Screen 2</Text>
        </View>
        <View style={styles.screen3}>
          <Text style={styles.text}>Screen 3</Text>
        </View>
      </Swiper>
    );
  }
}

export default Exercise9;
