/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class FirstNativeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: {},
      timerIsRunning: false,
      time: 0,
      timeString: '0:00'
    }
  }
  updateTime = () => {
    // get the current count from state.time
    let theTime = this.state.time;
    if (this.state.timerIsRunning) {
      // increment the count if we're timing (so we can use this for reset, too)
      theTime++;
    }
    const mins = Math.floor(theTime / 60);
    const ss = (theTime % 60) % 10;
    const s = Math.floor((theTime % 60) / 10);
    // set the time string into state for display
    this.setState({time: theTime, timeString: `${mins}:${s}${ss}`});
  }

  runTimer = () => {
    // if we're not timing, create a new timer and save in state
    if (!this.state.timerIsRunning) {
      const newTimer = setInterval(this.updateTime, 1000);
      this.setState({timer: newTimer});
    } else {
      clearInterval(this.state.timer);
    }
    this.setState({timerIsRunning: !this.state.timerIsRunning});
  }

  resetTimer = () => {
    this.setState({time: 0, timeString: '0:00'});
  }

  render() {
    let buttonText = (this.state.timerIsRunning ? 'Stop Timer' : 'Start Timer');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>My first React Native App</Text>
        <Text style={styles.timer}>{this.state.timeString}</Text>
        <Button title={buttonText} color="#FFFFFF" onPress={this.runTimer}/>
        <Button title='Reset Timer' color="#AA3333" onPress={this.resetTimer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  timer: {
    fontSize: 100,
    color: '#FFFFFF',
    backgroundColor: '#333333',
  },
});

AppRegistry.registerComponent('FirstNativeApp', () => FirstNativeApp);
