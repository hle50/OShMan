import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';
import {doLogin} from './actions';

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
  
  async submit(data, postSubmit) {
    try{
      console.log(data,);
      const {email, password} = data;
      const res = await this.props.doLogin(email, password);
      console.log(res);
      postSubmit();
    }
    catch(error){
      console.log(error);
      postSubmit();
    }

  }
  
  goToForgotPasswordScreen() {
    this.props.navigation.navigate('ForgotPassword')
  }
  
  render() {
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

const mapStateToProps = (state, ownProps) => ({ user: state.user });
const mapDispatchToProps = { doLogin };
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);