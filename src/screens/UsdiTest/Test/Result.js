import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import { REACT_APP_BASE_API_URL } from "@env";
import DonutChart from '../DonutChart';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import {Bars3BottomRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";


const Result = () => {
   const navigation = useNavigation();
   const [usdiResult, setUsdiResult ] = useState('');
   const [loading , setLoading] = useState(false);
   const [email , setEmail] = useState('');
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
         })
         .catch((error)=> {
            console.log(error)
         })
      }
      fetchUsdiResult();
   }, []);

   const sendEmailResult = async () => {
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      const data = {
         email: email,
         total_score: usdiResult.total_score,
         result: usdiResult.usdi_depression_level.depression_level,
      }
      setLoading(true);
      await axios.post(`${REACT_APP_BASE_API_URL}/usdi_result-email/`, data, config)
      .then((res) => {
         console.log('rres', res)
         if(res.data.status){
            alert('Email Result Sent!');
            setEmail('');
         }
      })
      .catch((error)=>{
         alert('Email not sent, please try again!');
         console.log(error)
      })
      setLoading(false);
   }
   return ( 
      <>
         <View className="pt-3 flex-row justify-end">
            <Bars3BottomRightIcon color="#000" onPress={()=> navigation.openDrawer()}/>
         </View>
         <View className="pt-5">
         {usdiResult?
            <>
               <Text className="text-lg font-bold text-center py-2" >
                  {usdiResult.usdi_depression_level.depression_level} 
               </Text>
               <View> 
                  <DonutChart score={usdiResult.total_score}/> 
               </View>
               <Text className="text-center py-3 ">
                  Your results indicate that you may be expecting some symptoms of{' '} 
                  {usdiResult.usdi_depression_level.depression_level}
               </Text>
               <View className="pt-5">
                  <Text className="text-md">Want a copy of your result?</Text>
                  <TextInput
                     className="p-3 rounded-md border mb-5"
                     placeholder="Enter Email"
                     onChangeText={setEmail}
                     value={email}
                  />
                  <TouchableOpacity
                        className=" bg-sky-700 rounded-lg mt-2"
                        onPress={() => sendEmailResult()}
                     >
                        <Text className="text-white text-center p-3 pl-4">
                           Send Result
                        </Text>
                     </TouchableOpacity>
               </View>
            </>
            :
            null}
            <Spinner visible={loading}/>
         </View>
      </>
   );
}
export default Result;
