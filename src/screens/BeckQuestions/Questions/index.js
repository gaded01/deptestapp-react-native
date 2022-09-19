import React, { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { useNavigation, } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SafeViewAndroid from "../../../components/SafeViewAndroid";
import {useBeckStatusContext} from '../../../context/BeckStatusContext' 
import Question1 from './Question1';
import Question2 from './Question2';
import axios from 'axios';
import { REACT_APP_BASE_API_URL } from "@env";

const Index = () => {
   const navigation = useNavigation();
   const { beckStatus, setBeckStatus } = useBeckStatusContext();
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
         console.log('res', res.data)
      })
      .catch((error)=> {
         console.log(error);
      })
   }
   const renderQuestion = (param) => {
      switch (param) {
         case 1:
            return <Question1 postAnswer={postAnswer}/>;
            break;
         case 2:
            return <Question2  postAnswer={postAnswer}/>;
            break;
         case 3:
            return <Question3/>;
            break;
         case 4:
            return <Question4/>;
            break;
         case 5:
            return <Question5/>;
            break;
         case 6:
            return <Question6/>;
            break;
         case 7:
            return <Question7/>;
            break;
         case 8:
            return <Question8/>;
            break;
         case 9:
            return <Question9/>;
            break;
         case 10:
            return <Question10/>;
            break;
         case 11:
            return <Question11/>;
            break;
         case 12:
            return <Question12/>;
            break;
         case 13:
            return <Question13/>;
            break;
         case 14:
            return <Question14/>;
            break;
         default:
            return <Question1/>;
      }   
   }
   
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View>
            <Text className="text-base pt-5 pb-10">Question {beckStatus}/21</Text>
         </View>
         {renderQuestion(beckStatus)}
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({})

export default Index;
