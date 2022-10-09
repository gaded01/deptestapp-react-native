import React, {useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   View,
   Text,
   TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { REACT_APP_BASE_API_URL } from "@env";
import {useUsdiStatusContext} from '../../../context/UsdiStatusContext';

const Question = () => {
   const [usdiQuestion, setUsdiQuestion] = useState([]);
   const { usdiStatus } = useUsdiStatusContext();
   let config = {};

   useEffect(()=> {
      const fetchQuestion = async () => {
         const params = {key: "value"}; 
         const resToken = await AsyncStorage.getItem('@access_token');  
         config = {
            headers: {Authorization: `Bearer ${resToken}`}
         } 
         await axios.post(`${REACT_APP_BASE_API_URL}/get-usdiquestion/`+usdiStatus , params, config)
         .then((res) => {
            setUsdiQuestion(res.data)
         })
         .catch((error) => {
            return error;
         })
      }
      fetchQuestion();
   }, [usdiStatus]); 

   return (
      <View className="pt-5">
         <Text className="text-xl font-bold">
            {usdiQuestion.id+". " + usdiQuestion.question}
         </Text>
      </View>
   );
}

export default Question;
