import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import SafeViewAndroid from "../../../components/SafeViewAndroid";

const Coloring = () => {
  const navigation = useNavigation();
  const style = StyleSheet.create({
    size: {
      width: 353,
      height: 180,
    },
  });
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="flex-row justify-start item-center">
        <ArrowSmallLeftIcon 
          style={{ marginTop: 4}} 
          color="#a3a3a3"
          onPress={()=>{
            navigation.navigate("Activities");
          }}
        />
        <Text className="text-xl font-bold ml-3">Coloring</Text>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          vertical
          contentContainerStyle={{
            paddingVertical: 0,
            flexGrow: 1,
          }}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          <Image
            style={style.size}
            source={require("../../../../assets/AcitvitiesImage/AdultTherapy/coloring.jpg")}
            className="rounded-lg"
          />

          <View className="py-3 ">
            <Text className="text-base text-justify text-gray-500 pb-3">
              Adult coloring books may seem like a fad, but they have legitimate
              value in treating depression. Allowing you to be creative, focused
              and occupied, adult coloring books soothe and bring peace of mind.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Coloring;
