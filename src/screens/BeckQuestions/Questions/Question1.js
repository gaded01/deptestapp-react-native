import React, {useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
   View,
   Text,
   TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { REACT_APP_BASE_API_URL } from "@env";


const Question1 = ({ postAnswer }) => {
   const [question, setQuestion] = useState([]);
   const bgColor = ['bg-emerald-800', 'bg-amber-500', 'bg-orange-600', 'bg-red-600'];
   const questionNum = 1;
   let config = {};
   const params = {
      key: "value"
   };
  
   useEffect(()=> {
      const fetchQuestion = async () => {
         let response = await AsyncStorage.getItem('@access_token');
         config = {
            headers: {Authorization: `Bearer ${response}`}
         } 
         const res = await axios.post(`${REACT_APP_BASE_API_URL}/get-beckoption/`+questionNum , params, config)
         .then((response) => {
            setQuestion(response.data)
         })
         .catch((error) => {
            return error;
         })
      }
      fetchQuestion();
   }, []);
   
   return (
      <View>
         {question.map((question , i)=>{
            return (
            <TouchableOpacity
               className={`${bgColor[i]} rounded-lg mt-3`}
               key={i} 
               onPress={() => postAnswer(question.id)}
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


export default Question1;
