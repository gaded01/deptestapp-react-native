import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { REACT_APP_BASE_API_URL } from "@env";
import DonutChart from '../DonutChart';
import Spinner from 'react-native-loading-spinner-overlay';
import {Bars3BottomRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';



const Result = () => {
   const navigation = useNavigation();
   const [ beckResult, setBeckResult ] = useState('');
   const [loading , setLoading] = useState(false);
   const [email , setEmail] = useState('');
   
   let config = {};

   useEffect(()=> {
      setLoading(true);
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
      setLoading(false);
   }, []);

   const sendEmailResult = async () => {
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      const data = {
         email: email,
         total_score: beckResult.score,
         result: beckResult.beck_depression_level.level_of_depression,
      }
      setLoading(true);
      await axios.post(`${REACT_APP_BASE_API_URL}/beck_result-email/`, data, config)
      .then((res) => {
         if(res.data.status){
            alert('Email Result Sent!');
            setEmail('');
         }
      })
      .catch((error)=>{
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
            
            {beckResult?
               <>
                  <Text className="text-lg font-bold text-center py-2" >
                     {beckResult.beck_depression_level.level_of_depression} 
                  </Text>
                  <View>
                     <DonutChart score={beckResult.score}/> 
                  </View>
                  <Text className="text-center py-4">
                     Your results indicate that you may be expecting some symptoms of{' '} 
                     {beckResult.beck_depression_level.level_of_depression}
                  </Text>
                  <View className="pt-2">
                     <Text className="text-md">Want a copy of your results?</Text>
                     <TextInput
                        className="p-3 rounded-md border"
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
