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
import Spinner from 'react-native-loading-spinner-overlay';



const Question = ({ postAnswer }) => {
   const [loading, setLoading] = useState(false);
   const [question, setQuestion] = useState([]);
   const { beckStatus } = useBeckStatusContext();
   const bgColor = ['bg-emerald-800', 'bg-amber-500', 'bg-orange-600', 'bg-red-600'];
   let config = {};

   useEffect(()=> {
      setLoading(true);
      const fetchQuestion = async () => {
         const params = {key: "value"}; 
         const resToken = await AsyncStorage.getItem('@access_token');  
         config = {
            headers: {Authorization: `Bearer ${resToken}`}
         } 
         await axios.post(`${REACT_APP_BASE_API_URL}/get-beckoption/`+beckStatus , params, config)
         .then((response) => {
            setQuestion(response.data)
            setLoading(false);
         })
         .catch((error) => {
            setLoading(false);
            return error;
         }) 
      }
      fetchQuestion();
   },[beckStatus]);

   const selectAnswer = (questionId) => {
      postAnswer(questionId);
   }
   
   return (
      <View>
         {question.map((question , i)=>{
            return (
            <TouchableOpacity
               className={`${bgColor[i]} rounded-lg mt-3`}
               key={i} 
               onPress={() => selectAnswer(question.id)}
            >
               <Text className="text-base text-white p-4 pl-4">
                  {question.option}
               </Text>
            </TouchableOpacity>
            );
         })}
          <Spinner
            visible={loading}
         />
      </View>
   );
}


export default Question;
