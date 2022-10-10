import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { REACT_APP_BASE_API_URL } from "@env";
import axios from 'axios';


const Logout = () => {
   const nav = useNavigation();
   
   useEffect(()=>{
      const out = async() => {
         let response = await AsyncStorage.getItem('@access_token');
         config = {
            headers: {Authorization: `Bearer ${response}`}
         } 
         axios.post(`${REACT_APP_BASE_API_URL}/user-logout`, {}, config)
         .then((res)=> {
            console.log('remove');
            AsyncStorage.removeItem('@access_token');
            nav.replace('Login');
         })
       };
       out();
   },[]);

   return (
      <View>
         
      </View>
   );
}

const styles = StyleSheet.create({})

export default Logout;
