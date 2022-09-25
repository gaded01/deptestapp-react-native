import React, { useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useBeckStatusContext} from '../../../context/BeckStatusContext';
import { REACT_APP_BASE_API_URL } from "@env";
import Option from './Option';
import Question from './Question';
import Result from './Result';

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
      console.log(beckStatus)
      console.log(answer)
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      if(beckStatus <= 2){
         await axios.post(`${REACT_APP_BASE_API_URL}/usdi-answer`, {usdi_question_id: beckStatus, usdi_option_id: answer}, config)
         .then(() => {
            setBeckStatus((prevStatus) => prevStatus + 1);
         })
         .catch((error)=> {
            console.log(error);
         })
      }
   }
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         {beckStatus <= 2?
            <>  
               <Question/>
               <Option postAnswer={postAnswer}/>
            </>
            :
            <Result/>
         }
      </SafeAreaView>
   );
}
export default Index;
