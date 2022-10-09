import { useLayoutEffect, useState } from "react";
import { 
	Text, 
	SafeAreaView,
   View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { REACT_APP_BASE_API_URL } from "@env";
import {useBeckStatusContext} from '../context/BeckStatusContext';
import SafeViewAndroid from "../components/SafeViewAndroid";
import BeckCard from "../components/BeckCard";
import UsdiCard from "../components/UsdiCard";
import {Bars3BottomRightIcon, Bars3Icon} from "react-native-heroicons/outline";

const HomeScreen = () => {
	const navigation = useNavigation();
   const { beckStatus, setBeckStatus } = useBeckStatusContext();
   const details = {
      beckTitle: 'Beck Depression Inventory',
      usdiTitle: 'University Student Depression Inventory'
   }
   let config = {};

   useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);
   const checkLastTest = async (component) => {
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      } 
      await axios.get(`${REACT_APP_BASE_API_URL}/check-test`, config)
      .then((res)=> {
         if(res.data.status !== 'failed'){
            navigation.navigate(component);
            setBeckStatus(prevState => prevState = 1);
         }
         else{
            alert('Test not available for 3 days after taking test.')
         }
      })
      .catch((err) => console.log(err));
   };
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View>
            <View className="flex-row justify-between align-center pt-3"> 
               <Text className="text-2xl font-bold pb-5 ">
                  Hello, Good Evening!
               </Text>
               <Bars3BottomRightIcon color="#000" onPress={()=>navigation.openDrawer()}/>
            </View>
         
            <View className="pb-5"> 
               <Text className="text-base font-bold">
                  Depression Test
               </Text>
               
               <Text className="text-xs text-gray-500">
                  Select the following test to take to assess
               </Text>
            </View>
            <BeckCard checkLastTest={checkLastTest} title={details.beckTitle}/>
            <UsdiCard checkLastTest={checkLastTest} title={details.usdiTitle }/>
         </View>
      </SafeAreaView>
   );
}
export default HomeScreen;
