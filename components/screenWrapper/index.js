import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const ScreenWrapper = (props) => {
  return (
    <View style={[props.style, style]}>
      {props.children}
    </View>
  )
};

const style = {
  flex:1,
  backgroundColor: 'white',
  justifyContent:'center',
  alignItems: 'center',
  paddingVertical: 5
};

export default ScreenWrapper;