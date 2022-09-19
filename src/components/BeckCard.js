import React from 'react';
import { useNavigation } from "@react-navigation/native";
import {
   View,
   Text,
   Image,
   StyleSheet, 
   TouchableOpacity,
} from 'react-native';


const BeckCard = ({title}) => {
   const navigation = useNavigation();
   const details = {
      title: title
   };
   const style = StyleSheet.create({
      size: {
         width:  353,
         height: 180,
      }
   });
   return (
      <View className="flex-row pb-5">
         <TouchableOpacity
            className="relative"
            onPress={()=> {navigation.navigate("Beck")}}
         >
            <Image
               style={style.size}
               source={require("../../assets/depression-img-1.png")}
               className="rounded-lg"
            />
            <View 
               style={style.size}
               className="absolute bg-sky-600 inset-0 opacity-30 rounded-lg"
            />  
            <Text className="text-base absolute bottom-3 left-3 text-white">
               {details.title}
            </Text>
         </TouchableOpacity>
      </View>  
   );
}

const styles = StyleSheet.create({})

export default BeckCard;
