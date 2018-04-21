import React, {Component} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Icon} from "react-native-elements";
import I18n from 'react-native-i18n';

import Colors from '../../style/Colors';
import ForgotPasswordForm from './ForgotPasswordForm';
import NavButton from '../../components/navButton'
import Strings from '../../components/I18n/Strings';

export default class ForgotPassword extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: Colors.wt, borderBottomWidth: 1},
    headerTintColor: Colors.white,
    title: `${I18n.t(Strings.PASSWORD_RECOVERY)}`,
    headerTitleStyle:{
      color: Colors.mainButton
    },
    headerLeft: (navigation.state.params && navigation.state.params.headerLeft),
    //disable swipe to open sidebar
    drawerLockMode: 'locked-closed'
  });
  
  constructor(props) {
    super(props);
    
    this.leftButtonTap = this.leftButtonTap.bind(this);
    this.submit = this.submit.bind(this);
  }
  
  async componentDidMount() {
    this.props.navigation.setParams({
      headerLeft: this.renderNavbarLeftButton()
    });
  }
  
  leftButtonTap() {
    // open side menu
    this.props.navigation.goBack();
  }
  
  renderNavbarLeftButton() {
    return (
      <NavButton
        onPress={this.leftButtonTap}>
        <Icon
          type={'ionicon'}
          color={Colors.mainButton}
          size={30}
          name="ios-arrow-back"
        />
      </NavButton>);
  }
  
  submit(data ,postSubmit) {
    console.log(data, );
    // TODO call API to do login
  }
  
  render() {
    return (
      
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
        <ForgotPasswordForm
          submit={this.submit}
        />
      </KeyboardAwareScrollView>
    
    )
  }
}
