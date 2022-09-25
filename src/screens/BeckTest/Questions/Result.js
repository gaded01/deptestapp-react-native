import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_BASE_API_URL } from "@env";
import DonutChart from '../DonutChart';


const Result = () => {
   const [ beckResult, setBeckResult ] = useState('');
   let config = {};

   useEffect(()=> {
      const fetchBeckResult = async () => {
         let response = await AsyncStorage.getItem('@access_token');
         config = {
            headers: {Authorization: `Bearer ${response}`}
         }
         await axios.get(`${REACT_APP_BASE_API_URL}/beck-result`, config)
         .then((res) => {
            setBeckResult(()=> res.data)
         })
         .catch((error)=> {
            console.log(error)
         })
      }
      fetchBeckResult();
   }, [])
   return (
      <View className="pt-5">
         {beckResult?
            <>
               <Text className="text-lg font-bold text-center py-5" >
                  {beckResult.beck_depression_level.level_of_depression} 
               </Text>
               <View>
                  <DonutChart score={beckResult.score}/> 
               </View>
               <Text className="text-center py-5 ">
                  Your results indicate that you may be expecting some symptoms of{' '} 
                  {beckResult.beck_depression_level.level_of_depression}
               </Text>
               <View className="pt-5">
                  <Text className="text-md">Want a copy of your result?</Text>
                  <TextInput
                     className="p-3 rounded-md border mb-5"
                     placeholder="Enter Email"
                  />
               </View>
            </>
         :
         null}
      </View>
   );
}


export default Result;
