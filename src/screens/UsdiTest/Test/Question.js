import React, {useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   View,
   Text,
   TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { REACT_APP_BASE_API_URL } from "@env";
import {useBeckStatusContext} from '../../../context/BeckStatusContext';

const Question = () => {
   const [usdiQuestion, setUsdiQuestion] = useState([]);
   const { beckStatus } = useBeckStatusContext();
   let config = {};

   useEffect(()=> {
      const fetchQuestion = async () => {
         const params = {key: "value"}; 
         const resToken = await AsyncStorage.getItem('@access_token');  
         config = {
            headers: {Authorization: `Bearer ${resToken}`}
         } 
         await axios.post(`${REACT_APP_BASE_API_URL}/get-usdiquestion/`+beckStatus , params, config)
         .then((res) => {
            setUsdiQuestion(res.data)
         })
         .catch((error) => {
            return error;
         })
      }
      fetchQuestion();
   }, [beckStatus]);

   return (
      <View>
         <Text className="text-lg">
            {usdiQuestion.question}
         </Text>
      </View>
   );
}

export default Question;
