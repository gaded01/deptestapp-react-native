
import { useState } from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { BeckStatusContext } from './src/context/BeckStatusContext'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/screens/LoginScreen";
import AuthStack from "./src/navigation/AuthStack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./src/screens/HomeScreen";
import Beck from "./src/screens/BeckTest/index";
import BeckQuestion from "./src/screens/BeckTest/Questions/index";
import Usdi from "./src/screens/UsdiTest/index";
import UsdiQuestion from "./src/screens/UsdiTest/Test/index";

const Stack = createDrawerNavigator();


export default function App() {
	const [ beckStatus, setBeckStatus ] = useState(1);
  	return (
		<NavigationContainer>
			<TailwindProvider>
				<BeckStatusContext.Provider value={{beckStatus, setBeckStatus }}>
					<AuthStack/>
				</BeckStatusContext.Provider>
			</TailwindProvider>
		</NavigationContainer>
  	);
}
