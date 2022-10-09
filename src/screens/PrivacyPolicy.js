import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import SafeViewAndroid from "../components/SafeViewAndroid";

const PrivacyPolicy = () => {
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
         <Text className="text-xl pb-2 font-bold">Privary Policy</Text>
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
