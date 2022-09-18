import React, { useLayoutEffect } from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SafeViewAndroid from "../../../components/SafeViewAndroid";

const Question6 = () => {
   const navigation = useNavigation();
   useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);

   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         
      </SafeAreaView>
   );
}


export default Question6;
