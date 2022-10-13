import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { 
	Text, 
	SafeAreaView,
   View,
} from "react-native";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HomeIcon} from "react-native-heroicons/outline";
import { REACT_APP_BASE_API_URL } from "@env";
import {useBeckStatusContext} from '../context/BeckStatusContext';
import SafeViewAndroid from "../components/SafeViewAndroid";
import BeckCard from "../components/BeckCard";
import UsdiCard from "../components/UsdiCard";

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
      await axios.post(`${REACT_APP_BASE_API_URL}/check-test`, {}, config)
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
                  Hello!
               </Text>
               <HomeIcon color="#000" onPress={()=>navigation.openDrawer()}/>
            </View>
         
            <View className="pb-5"> 
               <Text className="text-base font-bold">
                  Depression Test
               </Text>
               
               <Text className="text-xs text-gray-500">
                  Select the following test to take to assess
               </Text>
            </View>
            <View className="flex-row justify-center">
               <BeckCard checkLastTest={checkLastTest} title={details.beckTitle}/>
            </View>
            <View className="flex-row justify-center">
               <UsdiCard checkLastTest={checkLastTest} title={details.usdiTitle }/>
            </View>
           
         </View>
      </SafeAreaView>
   );
}
export default HomeScreen;
