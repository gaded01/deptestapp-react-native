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
import SafeViewAndroid from "../../../../components/SafeViewAndroid";

const ArtsCrafts = () => {
  const style = StyleSheet.create({
    size: {
      width: 353,
      height: 180,
    },
  });
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className="pb-2">
        <Text className="text-xl font-bold">Arts and crafts</Text>
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
            source={require("../../../../../assets/AcitvitiesImage/HelpDepression/Indoor/arts_crafts.png")}
            className="rounded-lg"
          />

          <View className="py-3 ">
            <Text className="text-base text-justify text-gray-500 pb-3">
              Creativity is an ideal way to express yourself, and it can help
              you do that even when you don’t intend to. Writing, pottery and
              sketching are some examples of creative outlets for depression.
              Paper crafts, like making cards, or needlework, like knitting or
              embroidery, help you focus on a detailed task that often requires
              your full attention, leaving little room for unhappy or harmful
              thoughts to take over.
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ArtsCrafts;
