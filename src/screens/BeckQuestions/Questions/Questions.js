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

function useForceUpdate(){
   const [value, setValue] = useState(0); // integer state
   console.log('render');
   return () => setValue(value => value + 1); // update state to force render
   // An function that increment 👆🏻 the previous state like here 
   // is better than directly setting `value + 1`
}

const Questions = ({ postAnswer }) => {
   const [question, setQuestion] = useState([]);
   const { beckStatus } = useBeckStatusContext();
   const bgColor = ['bg-emerald-800', 'bg-amber-500', 'bg-orange-600', 'bg-red-600'];
   const questionNum = 1;
   let config = {};

   useEffect(()=> {
      const fetchQuestion = async () => {
         const params = {key: "value"}; 
         const resToken = await AsyncStorage.getItem('@access_token');  
         config = {
            headers: {Authorization: `Bearer ${resToken}`}
         } 
         const res = await axios.post(`${REACT_APP_BASE_API_URL}/get-beckoption/`+beckStatus , params, config)
         .then((response) => {
            setQuestion(response.data)
         })
         .catch((error) => {
            return error;
         })
      }
      fetchQuestion();
   }, [beckStatus]);

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
               <Text className="text-white p-3 pl-4">
                  {question.option}
               </Text>
            </TouchableOpacity>
            );
         })}
      </View>
   );
}


export default Questions;
