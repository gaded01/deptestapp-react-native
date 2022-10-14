import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {View, StyleSheet, SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import { ArrowSmallLeftIcon } from 'react-native-heroicons/outline';
import SafeViewAndroid from "../../components/SafeViewAndroid";

const BeckHome = () => {
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
                     navigation.navigate("Beck");
                  }}
               >
               <ArrowSmallLeftIcon
                  color="#a3a3a3"
               />
            </TouchableOpacity>
            <Text className="text-2xl text-cyan-900 font-bold ml-2">
               USDI TEST
            </Text>
         </View>
         <View className="flex-row justify-center">
            <Image
               style={{height: 250, width: 200}}
               source={require("../../../assets/brain-cog.png")}
               className="rounded-lg shadow-lg"
            />
         </View>
         <View>
            <Text className="text-lg text-gray-600 text-justify">
               Over the last 2 weeks, how often have you been bothered by any of the following problems.
            </Text>
            <TouchableOpacity
               className="bg-cyan-900 mt-4 rounded-lg h-14"
               onPress={()=>{navigation.navigate("UsdiQuestion")}}
            >
               <Text className="text-white text-base text-center px-3 pt-4 ">
                  TAKE TEST
               </Text>
            </TouchableOpacity>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({})

export default BeckHome;
