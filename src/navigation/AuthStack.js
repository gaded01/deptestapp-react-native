import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";
import Beck from "../screens/BeckTest/index";
import Root from '../screens/Root';
import Usdi from "../screens/UsdiTest/index";



const Stack = createNativeStackNavigator();
const AuthStack = () => {
   return ( 
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Beck" component={Beck}/>
         <Stack.Screen name="Usdi" component={Usdi}/>
         <Stack.Screen name="Root" component={Root}  options={{ headerShown: false }}/>
      </Stack.Navigator>
   );
}
export default AuthStack; 
