import React, { useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Logout = () => {
   const nav = useNavigation();
   useEffect(()=>{
      const out = () => {
         AsyncStorage.removeItem('@access_token');
         nav.replace('Login');
       };
       out();
   },[])
   return (
      <View>
         
      </View>
   );
}

const styles = StyleSheet.create({})

export default Logout;
