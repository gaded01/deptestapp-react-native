import React, { useLayoutEffect } from 'react';
import {
   View, 
   StyleSheet, 
   SafeAreaView,
   Text,
   TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import UsdiCard from '../../components/UsdiCard';
import { ArrowSmallLeftIcon } from 'react-native-heroicons/outline';

const UsdiIndex = () => {
   const navigation = useNavigation();
   useLayoutEffect(() =>
      navigation.setOptions({
      headerShown: false,
      })
   );
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View className="flex-row justify-start items-center pt-3 pb-5">
            <TouchableOpacity 
                  className="w-10 h-10 shadow-sm flex items-center justify-center rounded-3xl self-center"
                  onPress={() => {
                     navigation.navigate("HomeScreen");
                  }}
               >
               <ArrowSmallLeftIcon
                  color="#a3a3a3"
               />
            </TouchableOpacity>
            <Text className="text-xl text-cyan-900 font-bold ml-2">
               University Student Depression Inventory
            </Text>
         </View>
         <UsdiCard/>
         <View>
            <Text className="text-lg text-gray-600 text-justify">
               University Student Depression Inventory is 30 item, 
               scale that is used to measure depressive symptoms among
               university students.
            </Text>
            <TouchableOpacity
               className="bg-cyan-900 mt-4 rounded-lg h-14"
               onPress={()=>{navigation.navigate("UsdiHome")}}
            >
               <Text className="text-white text-base text-center px-3 pt-4 ">
                  Click to Continue
               </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
   );
}

export default UsdiIndex;
