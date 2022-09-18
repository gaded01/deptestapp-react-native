import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
	Text, 
	SafeAreaView,
   View,
} from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import BeckCard from "../components/BeckCard";
import UsdiCard from "../components/UsdiCard";

const HomeScreen = () => {
	const navigation = useNavigation();
   const details = {
      beckTitle: 'Beck Depression Inventory',
      UsdiTitle: 'University Student Depression Inventory'
   }
   useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);
   
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View>
            <Text className="text-2xl font-bold pt-5 pb-5 ">
               Hello, Good Morning!
            </Text>
            <View className="pb-5"> 
               <Text className="text-base font-bold">
                  Depression Test
               </Text>
               <Text className="text-xs text-gray-500">
                  Select the following test to take to assess
               </Text>
            </View>
            <BeckCard title={details.beckTitle}/>
            <UsdiCard title={details.UsdiTitle }/>
         </View>
      </SafeAreaView>
   );
}
export default HomeScreen;
