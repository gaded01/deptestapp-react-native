import React, {useState, useEffect } from 'react';
import {
   View,
   Text,
   TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { REACT_APP_BASE_API_URL } from "@env";

const Question2 = () => {
   const [question, setQuestion] = useState([]);
   const bgColor = ['bg-emerald-800', 'bg-amber-500', 'bg-orange-600', 'bg-red-600'];
   let questionNum = 2;

   useEffect(()=> {
      const fetchQuestion = async () => {
         try {
            const res = await axios.post(`${REACT_APP_BASE_API_URL}/get-beckoption/`+questionNum)
            setQuestion(res.data)
         }
         catch(error) {
            throw error;
         }
      }
      fetchQuestion();
   }, []);

   const selectAnswer = (id) => {
      // code here
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


export default Question2;
