import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import LoginForm from './LoginForm';
import { doLogin, getProfile } from './actions';
import { setLoadingStatus } from '../../actions';

class LoginScreen extends Component {
  
  static navigationOptions = {
    header: null
  };
  
  constructor(props) {
    console.log(props);
    super(props);
    this.goToForgotPasswordScreen = this.goToForgotPasswordScreen.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  // check if token exists move user to home page
  async componentWillMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        await this.props.getProfile();
        this.props.navigation.navigate('Home');
        setTimeout(()=>{
          this.props.setLoadingStatus(false);
        },500);
      }
      else {
        this.props.setLoadingStatus(false);
      }
    }
    catch (e) {
      console.log('HOME ERROR')
    }
  }
  
  async submit(data, postSubmit) {
    try {
      const { email, password } = data;
      const res = await this.props.doLogin(email, password);
      // set token to local storage
      await AsyncStorage.setItem('token', res.token);
      this.props.navigation.navigate('Home');
      // move to home
      postSubmit();
    }
    catch (error) {
      console.log(error);
      postSubmit();
    }
    
  }
  
  goToForgotPasswordScreen() {
    this.props.navigation.navigate('ForgotPassword')
  }
  
  render() {
    const { loading } = this.props;
    if (loading) {
      return null;
    }
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <LoginForm
          submit={this.submit}
          goToForgotPasswordScreen={this.goToForgotPasswordScreen}
        />
      </KeyboardAwareScrollView>
    
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ user: state.user, loading: state.loading });
const mapDispatchToProps = { doLogin, setLoadingStatus, getProfile };
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);