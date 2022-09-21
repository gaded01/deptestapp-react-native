import React, { useLayoutEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import {
   View, 
   StyleSheet, 
   SafeAreaView,
   Text,
   TouchableOpacity
} from 'react-native';
import BeckCard from '../../components/BeckCard';

const Index = () => {
	const navigation = useNavigation();
   useLayoutEffect(() =>
      navigation.setOptions({
      headerShown: false,
      })
   );
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View className="pt-10">
            <BeckCard/>
         </View>
        <View>
            <Text className="text-lg font-bold">
               Beck Depression Inventory
            </Text>
            <Text className="text-base text-stone-700">
               Beck depression inventory is 21 item, 
               self-report rating inventory that measure 
               characteristics and symptoms of depression.
            </Text>
            <TouchableOpacity
               className="bg-sky-700 mt-4 rounded-lg"
               onPress={()=>{navigation.navigate("BeckQuestion")}}
            >
               <Text className="text-white text-base text-center px-3 py-3 ">
                  Click to Continue
               </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
     
   );
}

export default Index;
