import React, { useLayoutEffect, useState, useEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useBeckStatusContext} from '../../../context/BeckStatusContext';
import Question from './Question';
import Result from './Result';
import { REACT_APP_BASE_API_URL } from "@env";
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
   
   useEffect(()=> {
      setLoading(true);
      const getItemNumber = async () => {
         let response = await AsyncStorage.getItem('@access_token');
         config = {
            headers: {Authorization: `Bearer ${response}`}
         }
         await axios.get(`${REACT_APP_BASE_API_URL}/beck-item`, config)
         .then((res) => {
            if(res.data !== 1){ 
               setBeckStatus(res.data);
               setLoading(false);
               console.log('res', res.data);
            }
            else {
               setLoading(false);
            }
         })
      }
      getItemNumber();
   },[beckStatus])
   
   // Submit Answer
   const postAnswer = async (answer) => {
      setLoading(true);
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      if(beckStatus <= 21){
         setTimeout(() => {
             axios.post(`${REACT_APP_BASE_API_URL}/beck-answer`, {id: answer}, config)
            .then(() => {
               setBeckStatus((prevStatus) => prevStatus + 1);
               setLoading(false);
            })
            .catch((error)=> {
               console.log(error);
            })
         }, 5000)
        
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
         {beckStatus<= 1?
            <>  
               <View>
                  <Text className="text-lg font-bold pt-5 pb-10">Question {beckStatus}/21</Text>
               </View>
               <Question postAnswer={postAnswer}/> 
            </>
            :
            <Result/>
         }
         <Spinner
            visible={loading}
         />
      </SafeAreaView>
   );
}


export default Index;
