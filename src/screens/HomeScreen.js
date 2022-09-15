import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
	Text, 
	SafeAreaView,
	TextInput, 
	StyleSheet, 
	Button
} from "react-native";
import axios from "axios";
import {REACT_APP_BASE_API_URL} from '@env';
import SafeViewAndroid from "../components/SafeViewAndroid";


const HomeScreen = () => {
	const navigation = useNavigation();
   useLayoutEffect(() => 
      navigation.setOptions({
         headerShown: false,
      })
   )

   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <Button
            className="text-red-500"
            title="Beck Test"
         />
         <Button
            title="USDI Test"
         />
      </SafeAreaView>
   );
}
export default HomeScreen;
