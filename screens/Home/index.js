import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>HOme</Text>
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1
  }
}