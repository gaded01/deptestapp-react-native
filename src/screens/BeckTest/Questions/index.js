import React, { useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useBeckStatusContext} from '../../../context/BeckStatusContext';
import Question from './Question';
import Result from './Result';
import { REACT_APP_BASE_API_URL } from "@env";

const Index = () => {
   const navigation = useNavigation();
   const { beckStatus, setBeckStatus } = useBeckStatusContext();
   let config = {};
   useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);
   
   // Submit Answer
   const postAnswer = async (answer) => {
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      if(beckStatus <= 21){
         await axios.post(`${REACT_APP_BASE_API_URL}/beck-answer`, {id: answer}, config)
         .then(() => {
            setBeckStatus((prevStatus) => prevStatus + 1);
         })
         .catch((error)=> {
            console.log(error);
         })
      }
      // else{
      //    await axios.post(`${REACT_APP_BASE_API_URL}/beck-result` , config)
      //    .then((res) => {
      //       setBeckResult(()=> res.data);
      //    })
      // }

     
   }

   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         {beckStatus<= 21?
            <>  
               <View>
                  <Text className="text-base pt-5 pb-10">Question {beckStatus}/21</Text>
               </View>
               <Question postAnswer={postAnswer}/> 
            </>
            :
            <Result/>
         }
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({})

export default Index;
