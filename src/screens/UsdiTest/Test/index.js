import React, { useLayoutEffect, useState, useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Bars3BottomRightIcon } from "react-native-heroicons/outline";

import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useUsdiStatusContext} from '../../../context/UsdiStatusContext';
import { REACT_APP_BASE_API_URL } from "@env";
import Option from './Option';
import Question from './Question';
import Result from './Result';
import Spinner from 'react-native-loading-spinner-overlay';

function useForceUpdate(){
   const [value, setValue] = useState(0); // integer state
   return () => setValue(value => value + 1); // update state to force render
   // An function that increment 👆🏻 the previous state like here 
   // is better than directly setting `value + 1`
}

const Index = () => {
   const forceUpdate = useForceUpdate();
   const navigation = useNavigation();
   const [loading, setLoading] = useState(false);
   const { usdiStatus, setUsdiStatus } = useUsdiStatusContext();
   let config = {};
   useLayoutEffect(() => 
      navigation.setOptions({
         headerShown: false,
      })
   );

   useEffect(()=> {
      setLoading(true);
      const getItemNumber = async () => {
         let response = await AsyncStorage.getItem('@access_token');
         config = {
            headers: {Authorization: `Bearer ${response}`}
         }
         await axios.get(`${REACT_APP_BASE_API_URL}/usdi-item`, config)
         .then((res) => {
            if(res.data !== 1){
               setUsdiStatus(()=>res.data);
               setLoading(false);
               console.log('run baybay run')
            }
            else {
               setLoading(false);
            }
         })
      }
      getItemNumber()
   },[]); 
   
   // Submit Answer
   const postAnswer = async (answer) => {
      setLoading(true);
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      if(usdiStatus <= 30){
         await axios.post(`${REACT_APP_BASE_API_URL}/usdi-answer`, {usdi_question_id: usdiStatus, usdi_option_id: answer}, config)
         .then(() => {
            console.log('success')
            setUsdiStatus((prevStatus) => prevStatus + 1);
         })
         .catch((error)=> {
            console.log(error);
         })
         setLoading(false);
      }
   }
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         {usdiStatus <= 30?
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
