import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import Register from "./src/screens/Register";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<TailwindProvider>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Register" component={Register} />
			</Stack.Navigator>
		</TailwindProvider>
	</NavigationContainer>
   
  );
}
