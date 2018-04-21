import React from 'react';
import I18n from 'react-native-i18n';
import en from './en';

export default class Languages extends React.Component {
  constructor(props) {
    super(props);

    // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
    I18n.fallbacks = true;

    I18n.translations = {
      en: en
    };
  }

  render() {
    return null;
  }
}