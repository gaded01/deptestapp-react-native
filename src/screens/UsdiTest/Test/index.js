import React, { useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Bars3BottomRightIcon } from "react-native-heroicons/outline";

import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useBeckStatusContext} from '../../../context/BeckStatusContext';
import { REACT_APP_BASE_API_URL } from "@env";
import Option from './Option';
import Question from './Question';
import Result from './Result';
import Spinner from 'react-native-loading-spinner-overlay';

const Index = () => {
   const navigation = useNavigation();
   const [loading, setLoading] = useState(false);
   const { beckStatus, setBeckStatus } = useBeckStatusContext();
   let config = {};
   useLayoutEffect(() => 
      navigation.setOptions({
         headerShown: false,
      })
   );

   // Submit Answer
   const postAnswer = async (answer) => {
      setLoading(true);
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
         setLoading(false);
      }
   }
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         {beckStatus <= 30?
            <>  
               <Question/>
               <Option postAnswer={postAnswer}/>
            </>
            :
            <> 
               <Result/>
            </>
            
         }
         <Spinner
            visible={loading}
         />
      </SafeAreaView>
   );
}
export default Index;
