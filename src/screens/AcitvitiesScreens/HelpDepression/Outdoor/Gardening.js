import { useNavigation } from "@react-navigation/native";
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
import { ArrowSmallLeftIcon } from "react-native-heroicons/outline";
import SafeViewAndroid from "../../../../components/SafeViewAndroid";

const Gardening = () => {
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
          style={{ marginTop: 4 }}
          color="#a3a3a3"
          onPress={() => {
            navigation.navigate("Activities");
          }}
        />
        <Text className="text-xl font-bold">Gardening</Text>
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
            source={require("../../../../../assets/AcitvitiesImage/HelpDepression/Outdoor/gardening.jpg")}
            className="rounded-lg"
          />

          <View className="py-3 ">
            <Text className="text-base text-justify text-gray-500 pb-3">
              Working with plants, especially with your hands, has proved to
              lessen the severity of depression. It helps you focus and keeps
              your mind from drifting to unhappy and unhelpful thoughts. Plus,
              the final products provide a sense of pride. You can start with a
              couple of plants on your windowsill or in your backyard. You can
              also look into renting a plot to garden in or volunteer with
              community gardens.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Gardening;
