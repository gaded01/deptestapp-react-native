import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Image} from 'react-native';
import { HomeIcon } from "react-native-heroicons/outline";
import SafeViewAndroid from "../components/SafeViewAndroid"; 


const HomePanel = () => {
   const navigation = useNavigation();
   useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);
   const style = StyleSheet.create({
      size: {
         width:20,
         height: 20,
      },
   });

   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View>
            <View className="flex-row justify-between py-5 ">
               <Text className="text-2xl font-bold text-cyan-900 self-center w-52">Welcome to <Text className="text-4xl">Deptest</Text></Text>
                  <TouchableOpacity 
                     className="w-10 h-10 shadow-sm flex items-center justify-center rounded-3xl self-center bg-cyan-900"
                  >
                  
                     <HomeIcon className="shadow-md " color="#fff"/>
                  </TouchableOpacity>
            </View>
            <View className="flex-row justify-around mb-5">
               <View className="flex items-center">
                  <TouchableOpacity 
                     className="w-36 h-36 bg-white shadow-md flex items-center justify-center rounded-lg"
                     onPress={()=> {navigation.navigate("HomeScreen")}}   
                  >
                     <Image
                        style={{width: 120, height: 120}}
                        source={require("../../assets/app-logo.png")}
                        
                     />
                  </TouchableOpacity>
                  <Text className="text-base text-gray-500 ">Deptest</Text>
               </View>
              
               <View className="flex items-center">
                  <TouchableOpacity 
                     className="w-36 h-36 bg-white shadow-md flex items-center justify-center rounded-lg"
                     onPress={()=> {navigation.navigate("Activities")}}  
                  >
                     <Image
                        style={{width: 100, height: 100}}
                        source={require("../../assets/hobbies.png")}
                     />
                  </TouchableOpacity>
                  <Text className="text-base text-gray-500 ">Coping Strategies</Text>
               </View>
            </View>
            <View className="flex-row justify-around">
               <View className="flex items-center">
                  <TouchableOpacity 
                     className="w-36 h-36 bg-white shadow-md flex items-center justify-center rounded-lg"
                     onPress={()=> {navigation.navigate("PrivacyPolicy")}}    
                  >
                     <Image
                        style={{width: 100, height: 100}}
                        source={require("../../assets/app-shield.png")}
                     />
                  </TouchableOpacity>
                  <Text className="text-base text-gray-500 ">Privacy Policy</Text>
               </View>
               <View className="flex items-center">
                  <TouchableOpacity 
                     className="w-36 h-36 bg-white shadow-md flex items-center justify-center rounded-lg"
                     onPress={()=> {navigation.navigate("Logout")}}   
                  >
                     <Image
                        style={{width: 90, height: 90}}
                        source={require("../../assets/app-logout.png")}
                     />
                  </TouchableOpacity>
                  <Text className="text-base text-gray-500 ">Logout</Text>
               </View>
            </View>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({})

export default HomePanel;
