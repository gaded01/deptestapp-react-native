import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { REACT_APP_BASE_API_URL } from "@env";
import DonutChart from '../DonutChart';
import axios from 'axios';

const Result = () => {
   const [usdiResult, setUsdiResult ] = useState('');
   let config = {};

   useEffect(()=> { 
      const fetchUsdiResult = async () => {

         let response = await AsyncStorage.getItem('@access_token');
         config = {
            headers: {Authorization: `Bearer ${response}`}
         }
         await axios.get(`${REACT_APP_BASE_API_URL}/usdi-result`, config)
         .then((res) => {
            setUsdiResult(()=> res.data)
            console.log(res.data)
         })
         .catch((error)=> {
            console.log(error)
         })
      }
      fetchUsdiResult();
   }, [])
   return (
      <View className="pt-5">
      {usdiResult?
         <>
            <Text className="text-lg font-bold text-center py-5" >
               {usdiResult.usdi_depression_level.depression_level} 
            </Text>
            <View>
               <DonutChart score={usdiResult.total_score}/> 
            </View>
            <Text className="text-center py-5 ">
               Your results indicate that you may be expecting some symptoms of{' '} 
               {usdiResult.usdi_depression_level.depression_level}
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
