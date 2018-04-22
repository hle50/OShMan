/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';

import Languages from './components/I18n/Languages';
import store from './store/store';
import AppWithNavigation from "./navigation/AppWithNavigation";
import Loading from './components/loading';

export default class App extends Component<{}> {
  
  render() {
    
    return (
      <Provider store={store}>
        <MenuProvider>
          <View style={styles.container}>
            <Languages />
            <Loading/>
            <AppWithNavigation />
          </View>
        </MenuProvider>
      </Provider>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
