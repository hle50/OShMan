import React from 'react';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';

// import WelcomeScene from '../scenes/Welcome';
// import HomeScene from '../scenes/Home';
// import SideBar from '../components/sidebar/SideBar';
// import ProfileScene from '../scenes/profile/Profile';
// import UpdateProfileScene from '../scenes/profile/UpdateProfile';
// import ChangePasswordScene from '../scenes/profile/ChangePassword';
// import InformationScene from '../scenes/informations/Information';
// import PostScene from '../scenes/informations/Post';
// import PollScene from '../scenes/informations/Poll';
// import EventsScene from '../scenes/events/Events';
// import EventScene from '../scenes/events/Event';
// import BillingStatementScene from '../scenes/billing/BillingStatement';
// import InformationDetailScence from '../scenes/informations/InformationDetail';
import LoginScreen from '../screens/Login';
import ForgotPasswordScreen from '../screens/ForgotPassword';


const LoginStack = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  ForgotPassword:{
    screen: ForgotPasswordScreen
  }
}, {
  headerMode: 'screen'
});

// const MainStack = StackNavigator({
//   Home: {
//     screen: HomeScene
//   }
// });
//
// const MainDrawer = DrawerNavigator({
//   Home: {
//     screen: MainStack
//   }
// }, {
//   contentComponent: props => <SideBar {...props} />
// });
//
// const ProfileStack = StackNavigator({
//   Profile: {
//     screen: ProfileScene
//   },
//   UpdateProfile: {
//     screen: UpdateProfileScene
//   },
//   ChangePassword: {
//     screen: ChangePasswordScene
//   }
// }, {
//   headerMode: 'screen'
// });
//
// const ProfileDrawer = DrawerNavigator({
//   Profile: {
//     screen: ProfileStack
//   }
// }, {
//   contentComponent: props => <SideBar {...props} />
// });
//
// const InformationStack = StackNavigator({
//   Information: {
//     screen: InformationScene
//   },
//   Post: {
//     screen: PostScene
//   },
//   Poll: {
//     screen: PollScene
//   },
//   InformationDetail:{
//     screen: InformationDetailScence
//   }
// }, {
//   headerMode: 'screen'
// });
//
// const InformationDrawer = DrawerNavigator({
//   Information: {
//     screen: InformationStack
//   }
// }, {
//   contentComponent: props => <SideBar {...props} />
// });
//
// const EventsStack = StackNavigator({
//   Events: {
//     screen: EventsScene
//   },
//   Event:{
//     screen: EventScene
//   }
// }, {
//   headerMode: 'screen'
// });
//
// const EventsDrawer = DrawerNavigator({
//   Events: {
//     screen: EventsStack
//   }
// }, {
//   contentComponent: props => <SideBar {...props} />
// });
//
// const BillingStack = StackNavigator({
//   Billing: {
//     screen: BillingStatementScene
//   }
// }, {
//   headerMode: 'screen'
// });
//
// const BillingDrawer = DrawerNavigator({
//   Billing: {
//     screen: BillingStack
//   }
// }, {
//   contentComponent: props => <SideBar {...props} />
// });

export default RootNavigator = StackNavigator({
  Login: {
    screen: LoginStack
  },
  // Main: {
  //   screen: MainDrawer
  // },
  // Profile: {
  //   screen: ProfileDrawer
  // },
  // Information: {
  //   screen: InformationDrawer
  // },
  // Events: {
  //   screen: EventsDrawer
  // },
  // Billing: {
  //   screen: BillingDrawer
  // }
}, {
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false,
  }
});
