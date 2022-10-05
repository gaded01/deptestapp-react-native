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

const ProfessionalHelp = () => {
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
          style={{ marginTop: 3 }}
          color="#a3a3a3"
          onPress={() => {
            navigation.navigate("Activities");
          }}
        />
         <Text className="text-xl font-bold">Get Professional Help for Depression</Text> 
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
            source={require("../../../../assets/AcitvitiesImage/ProfessionalHelp/prof_help.jpg")}
            className="rounded-lg"
          />

          <View className="py-3 ">
            <Text className="text-base text-justify text-gray-500 pb-3">
              At the most basic level, treatment can stabilize someone who has
              suicidal thoughts and provides them with the support and tools
              they need. Treating severe depression is just as critical as
              treating any other health concern. Remember, depression can worsen
              and potentially become fatal if left untreated.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ProfessionalHelp;
