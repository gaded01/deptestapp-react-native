import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import { HomeIcon } from 'react-native-heroicons/outline';
import SafeViewAndroid from "../components/SafeViewAndroid";

const PrivacyPolicy = () => {
   const navigation = useNavigation();
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="flex-row justify-between items-center pt-3 pb-5"> 
         <Text className="text-2xl pb-2 text-cyan-900 font-bold">Privary Policy</Text>
         <TouchableOpacity 
            className="w-10 h-10 shadow-sm flex items-center justify-center rounded-3xl self-center bg-cyan-900"
            onPress={()=> navigation.navigate("HomePanel")}
         >
               
            <HomeIcon className="shadow-md " color="#fff"/>
         </TouchableOpacity>
      </View>
      <View>
         <Text className="text-base text-justify text-gray-500 pb-3">
            DepTest aims to help students to be more open when it comes to their mental stability. Depression
            is a serious matter and more likely engaged to students. We reserved the right to retain any Personal
            Data as long as it is needed. We follow generally accepted industry standards to protect the Personal
            Data submitted to us.
         </Text>
      </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({})

export default PrivacyPolicy;
