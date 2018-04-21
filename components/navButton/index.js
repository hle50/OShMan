/**
 * Created by nois on 9/29/17.
 */
import React, {Component} from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';

export default NavButton = (props) => {
  let {children, navStyle, isShowCircle} = props;
  const {circle, container} = styles;
  return (
    <TouchableOpacity
      style={[container, navStyle]}
      onPress={props.onPress}>
      {children}
      {isShowCircle && <View style={circle}/>}
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    position: 'relative',
    paddingLeft: 10
  },
  circle: {
    position: 'absolute',
    right: 2,
    top: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgb(255, 0, 0)'
  }
};