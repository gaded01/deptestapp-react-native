import React, { useLayoutEffect } from 'react';
import {
   View, 
   StyleSheet, 
   SafeAreaView,
   Text,
   TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../../components/SafeViewAndroid";
import UsdiCard from '../../components/UsdiCard';

const UsdiIndex = () => {
   const navigation = useNavigation();
   useLayoutEffect(() =>
      navigation.setOptions({
      headerShown: false,
      })
   );
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View className="pt-10">
            <UsdiCard/>
         </View>
        <View>
            <Text className="text-lg font-bold">
               University Student Depression Inventory
            </Text>
            <Text className="text-base text-stone-700">
               University Student Depression Inventory is 30 item, 
               scale that is used to measure depressive symptoms among
               university students.
            </Text>
            <TouchableOpacity
               className="bg-sky-700 mt-4 rounded-lg"
               onPress={()=>{navigation.navigate("UsdiQuestion")}}
            >
               <Text className="text-white text-base text-center px-3 py-3 ">
                  Click to Continue
               </Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
   );
}

export default UsdiIndex;
