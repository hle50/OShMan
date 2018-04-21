import React, {Component} from 'react';
import {
  View,
  Keyboard
} from 'react-native';
import {GiftedForm} from 'react-native-gifted-form';
import I18n from 'react-native-i18n';

import Styles from '../../../style'
import Colors from '../../../style/Colors';
import Strings from '../../../components/I18n/Strings';

export default class ForgotPasswordForm extends Component {
  
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
  
  renderForgotPasswordForm() {
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
        formName='forgotPasswordForm'
        clearOnClose={false}
        scrollEnabled={false}
      >
        {this.renderEmailInput()}
        <GiftedForm.ErrorsWidget widgetStyles={Styles.GiftedForm.ErrorWidget} />
        <GiftedForm.SubmitWidget
          title={I18n.t(Strings.SUBMIT)}
          widgetStyles={{
            submitButton: {
              backgroundColor: Colors.mainButton,
            }
          }}
        />
      </GiftedForm>
    )
  }
  
  render() {
    return (
      <View style={Styles.screenWrapper}>
        {this.renderForgotPasswordForm()}
      </View>
    )
  }
}
