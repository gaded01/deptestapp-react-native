import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Register from "./src/screens/Register";
import Beck from "./src/screens/BeckTest/index";
import BeckQuestion from "./src/screens/BeckTest/Questions/index";
import { BeckStatusContext } from './src/context/BeckStatusContext'
import { useState } from "react";


const Stack = createNativeStackNavigator();

export default function App() {
	const [ beckStatus, setBeckStatus ] = useState(1);
  	return (
		<NavigationContainer>
			<TailwindProvider>
				<BeckStatusContext.Provider value={{beckStatus, setBeckStatus }}>
					<Stack.Navigator initialRouteName="Login">
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Register" component={Register} />
						<Stack.Screen name="Beck" component={Beck}/>
						<Stack.Screen name="BeckQuestion" component={BeckQuestion} />
					</Stack.Navigator>
				</BeckStatusContext.Provider>
			</TailwindProvider>
		</NavigationContainer>
  	);
}
