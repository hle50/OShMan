import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Spinner from 'react-native-loading-spinner-overlay';

class Loading extends Component {
  constructor(props) {
    console.log(props)
    super()
  }
  
  render() {
    return (
      <Spinner visible={this.props.loading} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ loading: state.loading });

export default connect(mapStateToProps, null)(Loading);