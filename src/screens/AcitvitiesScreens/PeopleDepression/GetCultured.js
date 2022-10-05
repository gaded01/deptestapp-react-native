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
import SafeViewAndroid from "../../../components/SafeViewAndroid";

const GetCultured = () => {
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
        <Text className="text-xl font-bold">Get Cultured</Text>
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
            source={require("../../../../assets/AcitvitiesImage/PeopleDepression/get_cultured.jpg")}
            className="rounded-lg"
          />

          <View className="py-3 ">
            <Text className="text-base text-justify text-gray-500 pb-3">
              If you feel you're not artistic yourself, enrich your day by
              visiting an art gallery or museum and enjoy the work of others.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GetCultured;
