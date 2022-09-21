import React, { useLayoutEffect, useState } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useBeckStatusContext} from '../../../context/BeckStatusContext';
import Question from './Question';

import { REACT_APP_BASE_API_URL } from "@env";

const Index = () => {
   const navigation = useNavigation();
   const { beckStatus, setBeckStatus } = useBeckStatusContext();
   const [state, setState] = useState(beckStatus);
   let config = {};
   useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);
   const postAnswer = async (answer) => {
      let response = await AsyncStorage.getItem('@access_token');
      config = {
         headers: {Authorization: `Bearer ${response}`}
      }
      await axios.post(`${REACT_APP_BASE_API_URL}/beck-answer`, {id: answer}, config)
      .then((res) => {
         setBeckStatus((prevStatus) => prevStatus + 1);
         setState((prevStatus) => prevStatus + 1);
         console.log('res', res.data)
      })
      .catch((error)=> {
         console.log(error);
      })
   }

   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View>
            <Text className="text-base pt-5 pb-10">Question {state}/21</Text>
         </View>
         <Question postAnswer={postAnswer}/>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({})

export default Index;
