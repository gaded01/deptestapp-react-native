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

const Option = ({postAnswer}) => {
   const { usdiStatus } = useUsdiStatusContext();
   const [usdiOption, setUsdiOption] = useState([]);
   const bgColor = ['bg-emerald-800', 'bg-amber-500', 'bg-orange-600', 'bg-red-500', 'bg-red-800'];
   let config = {};

   useEffect(()=> {
      const fetchOption = async () => {
         const resToken = await AsyncStorage.getItem('@access_token');  
         config = {
            headers: {Authorization: `Bearer ${resToken}`}
         } 
         await axios.get(`${REACT_APP_BASE_API_URL}/get-usdioption`, config)
         .then((res)=> {
            setUsdiOption(() => res.data);
         })
      }
      fetchOption();
   },[]); 


   return (
      <View className="pt-5">
        {usdiOption.map((option , i)=>{
            return (
            <TouchableOpacity
               className={`${bgColor[i]} rounded-lg mt-3`}
               key={i} 
               onPress={() => {postAnswer(option.id)}}
            >
               <Text className="text-base text-white p-4 pl-4">
                  {option.option}
               </Text>
            </TouchableOpacity>
            );
         })}
      </View>
   );
}

export default Option;
