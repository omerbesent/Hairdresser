import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Register from '../Screens/Register';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Login"}
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerShown: false
                }}
                // headerMode='float'
            >
                {/* <Stack.Screen name="Login" component={Login} options={{headerShown: false}} /> */}
                <Stack.Screen name="Login" component={Login}  />
                <Stack.Screen name="Register" component={Register}   /> 
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default MyStack;