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
      if(beckStatus <= 21){
         await axios.post(`${REACT_APP_BASE_API_URL}/beck-answer`, {id: answer}, config)
         .then(() => {
            setBeckStatus((prevStatus) => prevStatus + 1);
            setLoading(false);
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

const styles = StyleSheet.create({})

export default Index;
