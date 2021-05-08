import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { createDrawerNavigator, } from '@react-navigation/drawer';

import Login from '../Screens/Login';
import Register from '../Screens/Register';
import Home from '../Screens/Home';
import HairdresserDetails from '../Screens/HairdresserDetails';
import UserProfile from '../Screens/UserProfile';
import Map from '../Screens/Map';

const AuthStack = createStackNavigator();


const OtherStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const AuthStackComp = () => {
  return (<AuthStack.Navigator initialRouteName={'Login'}
    screenOptions={{ 
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerShown: false,
    }}>
    <AuthStack.Screen name="Home" component={HomeDrawer}></AuthStack.Screen>
    <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
    <AuthStack.Screen name="Register" component={Register}></AuthStack.Screen>
  </AuthStack.Navigator>)
}

const OtherStackComp = () => {
  return <OtherStack.Navigator initialRouteName={'Home'}   screenOptions={{
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false,
  }}>
    <AuthStack.Screen name="Home" component={Home}></AuthStack.Screen>
    <AuthStack.Screen name="HairdresserDetails" component={HairdresserDetails}></AuthStack.Screen>
    <AuthStack.Screen name="Map" component={Map}></AuthStack.Screen>
  </OtherStack.Navigator>
}

const HomeDrawer = () => {
  return (<Drawer.Navigator initialRouteName="Home"
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerShown: false,
    }}>
    <Drawer.Screen name="Home" component={OtherStackComp} ></Drawer.Screen>
    <Drawer.Screen name="UserProfile" component={UserProfile} ></Drawer.Screen>
  </Drawer.Navigator>)
}

// function MyStack() {
//   return (
//     <Stack.Navigator
//       initialRouteName={'Login'}
//       screenOptions={{
//         gestureEnabled: true,
//         gestureDirection: 'horizontal',
//         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
//         headerShown: false,
//       }}
//       headerMode="screen">
//       {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Register" component={Register} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen
//         name="HairdresserDetails"
//         component={HairdresserDetails}
//       />
//     </Stack.Navigator>
//   );
// }

// export default MyStack;

function AppDrawerNavigationContainer() {
  return (
    <NavigationContainer>
      <AuthStackComp></AuthStackComp>
    </NavigationContainer>
  );
}

export default AppDrawerNavigationContainer;
