import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import I18n from 'react-native-i18n';
import {Icon, Button} from 'react-native-elements';

import Colors from '../../style/Colors';
import Strings from '../../components/I18n/Strings';
import NavButton from '../../components/navButton';

export default class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerStyle: {backgroundColor: Colors.wt, borderBottomWidth: 1},
    headerTintColor: Colors.white,
    title: `${I18n.t(Strings.HOME)}`,
    headerTitleStyle:{
      color: Colors.mainButton
    },
    headerLeft: (navigation.state.params && navigation.state.params.headerLeft),
    drawerLockMode: 'locked-closed'
  });
  
  constructor(props) {
    super(props);
    this.leftButtonTap = this.leftButtonTap.bind(this);
  }
  
  async componentDidMount() {
    this.props.navigation.setParams({
      headerLeft: this.renderNavbarLeftButton()
    });
  }
  
  leftButtonTap() {
    // open side menu
    this.props.navigation.navigate('DrawerOpen');
  }
  
  renderNavbarLeftButton() {
    return (
      <NavButton
        onPress={this.leftButtonTap}>
        <Icon
          color={Colors.mainButton}
          size={30}
          name="menu"
        />
      </NavButton>);
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Button
          buttonStyle={styles.button}
          backgroundColor={Colors.mainButton}
          title={I18n.t(Strings.PRODUCTS)}
        />
        
        <Button
          buttonStyle={styles.button}
          backgroundColor={Colors.subButton}
          title={I18n.t(Strings.ORDERS)}
        />
        
        <Button
          buttonStyle={styles.button}
          backgroundColor={Colors.blue}
          title={I18n.t(Strings.SHIPPER)}
        />
        
        <Button
          buttonStyle={styles.button}
          backgroundColor={Colors.warnText}
          title={I18n.t(Strings.STATISTIC)}
        />
      </View>
    )
  }
}
const styles = {
  container: {
    flex: 1
  },
  button:{
    marginVertical: 10
  }
};