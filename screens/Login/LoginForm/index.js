import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Keyboard
} from 'react-native';
import {GiftedForm} from 'react-native-gifted-form';
import I18n from 'react-native-i18n';

import Styles from '../../../style'
import Colors from '../../../style/Colors';
import Strings from '../../../components/I18n/Strings';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  validator = {
    email: {
      validate: [
        {
          validator: 'isLength',
          arguments: [1],
          message: `${I18n.t(Strings.EMAIL_IS_REQUIRED)}`
        },
        {
          validator: 'isEmail',
          message: `${I18n.t(Strings.EMAIL_IS_INVALID)}`
        }
      ]
    },
    password: {
      validate: [{
        validator: 'isLength',
        arguments: [1],
        message: `${I18n.t(Strings.PASSWORD_IS_REQUIRED)}`
      }]
    },
  };
  
  onSubmit = async (isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
    // dismiss keyboard
    Keyboard.dismiss();
    if (isValid === true) {
      this.props.submit(values, postSubmit);
    }
  };
  renderEmailInput() {
    return (
      <GiftedForm.TextInputWidget
        widgetStyles={{
          rowContainer: [ Styles.GiftedForm.TextInput.rowContainer ],
          textInput: [ Styles.GiftedForm.TextInput.textInput ],
          textInputTitle: [ Styles.GiftedForm.TextInput.textInputTitle ],
          
        }}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder={I18n.t(Strings.EMAIL)}
        underlineColorAndroid={'transparent'}
        underlined={false}
        inline={false}
        name='email'
        clearButtonMode='while-editing'
        title={I18n.t(Strings.EMAIL)}
      />
    )
  }
  
  renderPasswordInput() {
    return (
      <GiftedForm.TextInputWidget
        widgetStyles={{
          rowContainer: [ Styles.GiftedForm.TextInput.rowContainer ],
          textInput: [ Styles.GiftedForm.TextInput.textInput ],
          textInputTitle: [ Styles.GiftedForm.TextInput.textInputTitle ],
          
        }}
        secureTextEntry={true}
        placeholder={I18n.t(Strings.PASSWORD)}
        underlineColorAndroid={'transparent'}
        underlined={false}
        inline={false}
        showInlineErrorMessage={false}
        name='password' // mandatory
        clearButtonMode='while-editing'
        title={I18n.t(Strings.PASSWORD)}
      />
    )
  }
  
  renderLoginForm() {
    return (
      <GiftedForm
        contentContainerStyle={{
          flex: 1,
          marginLeft: 10,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        validators={this.validator}
        formStyles={{ containerView: { backgroundColor: Colors.background } }}
        formName='loginForm'
        clearOnClose={false}
        scrollEnabled={false}
      >
        {this.renderEmailInput()}
        {this.renderPasswordInput()}
        <GiftedForm.ErrorsWidget widgetStyles={Styles.GiftedForm.ErrorWidget} />
        <GiftedForm.SubmitWidget
          onSubmit={this.onSubmit}
          title={I18n.t(Strings.SIGN_IN)}
          widgetStyles={{
            submitButton: {
              backgroundColor: Colors.mainButton,
            }
          }}
        />
        
        <TouchableOpacity
          onPress={this.props.goToForgotPasswordScreen}
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>{I18n.t(Strings.FORGOT_PASSWORD)}</Text>
        </TouchableOpacity>
      </GiftedForm>
    )
  }
  
  render() {
    return (
      <View style={Styles.screenWrapper}>
        {this.renderLoginForm()}
      </View>
    )
  }
}
