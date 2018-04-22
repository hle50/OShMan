import React, {Component} from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Image} from 'react-native';
import I18n from 'react-native-i18n';
import {connect} from 'react-redux';

import String from '../I18n/Strings';
import Colors from '../../style/Colors';

class SideBar extends Component {
  

  
  render() {
    const {container} = styles;
    return (
      <View style={container}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 40}}>
          <View>
            <Image style={{width: 50, height: 50, borderRadius: 25, borderColor: Colors.grey2, borderWidth: 2}} source={require('../../assets/images/no-avatar.png')}/>
          </View>
          <View>
            <Text>{this.props.user.fullName}</Text>
            <Text>{this.props.user.email}</Text>
          </View>
        </View>
       
        <View>
        
        </View>
      </View>
    )
  }
}


const styles = {
  container:{
    flex:1,
    backgroundColor: Colors.background,
    paddingHorizontal:5
  }
};
const mapStateToProps = state => {
  const {user} = state;
  return {
    user
  }
};

export default connect(mapStateToProps, null)(SideBar);


