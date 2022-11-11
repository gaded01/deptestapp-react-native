import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { HomeIcon } from "react-native-heroicons/outline";
import { ArrowLeftOnRectangleIcon } from "react-native-heroicons/outline";
import SafeViewAndroid from "../components/SafeViewAndroid";

const HomePanel = () => {
  const navigation = useNavigation();
  useLayoutEffect(() =>
    navigation.setOptions({
      headerShown: false,
    })
  );
  const style = StyleSheet.create({
    size: {
      width: 20,
      height: 20,
    },
  });

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
			<View className="flex-row justify-between py-5 ">
				<Text className="text-xl font-bold text-cyan-900 self-center w-52">
					Welcome to <Text className="text-4xl">Deptest</Text>
				</Text>
				<TouchableOpacity 
					className="w-10 h-10 shadow-sm flex items-center justify-center rounded-3xl self-center bg-cyan-900" 
					onPress={() => {
                  navigation.navigate("Logout");
                }}
				>
					<ArrowLeftOnRectangleIcon className="shadow-md " color="#fff" />
				</TouchableOpacity>
			</View>
			<ScrollView
					vertical
					contentContainerStyle={{
						paddingBottom: 150,
					}}
					showsHorizontalScrollIndicator={false}
					className="pt-4"
					style={{ flexGrow: 1 }}
        	>
			<View className="flex-row justify-around mb-5">
            <View className="flex items-center">
              <TouchableOpacity
                className="w-full h-44 p-4 bg-white shadow-md flex items-center justify-center rounded-lg"
                onPress={() => {
                  navigation.navigate("HomeScreen");
                }}
              >
                <View className="flex-row justify-between">
                  <Image
                    style={{ width: 110, height: 110 }}
                    source={require("../../assets/app-logo.png")}
                  />
                  <View className="w-52">
                    <Text className="text-base text-gray-500 font-bold ">
                      Deptest
                    </Text>
                    <Text className="text-sm text-gray-500 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ante ipsum primis in faucibus orci luctus.
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row justify-around mb-5">
            <View className="flex items-center">
              <TouchableOpacity
                className="w-full h-44 p-4 bg-white shadow-md flex items-center justify-center rounded-lg"
                onPress={() => {
                  navigation.navigate("Activities");
                }}
              >
                <View className="flex-row justify-between">
                  <View className="w-52">
                    <Text className="text-base text-gray-500 font-bold ">
                      Coping Strategies
                    </Text>
                    <Text className="text-sm text-gray-500 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ante ipsum primis in faucibus orci luctus.
                    </Text>
                  </View>

                  <Image
                    style={{ width: 110, height: 110 }}
                    source={require("../../assets/hobbies.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
			 <View className="flex-row justify-around mb-5">
            <View className="flex items-center">
              <TouchableOpacity
                className="w-full h-44 p-4 bg-white shadow-md flex items-center justify-center rounded-lg"
                onPress={() => {
                  navigation.navigate("PrivacyPolicy");
                }}
              >
                <View className="flex-row justify-between">
					 	<Image
							style={{ width: 110, height: 110 }}
							source={require("../../assets/app-shield.png")}
							/>
                  <View className="w-52">
                    <Text className="text-base text-gray-500 font-bold ">
						  	Privacy Policy
                    </Text>
                    <Text className="text-sm text-gray-500 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ante ipsum primis in faucibus orci luctus.
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
			 <View className="flex-row justify-around mb-5">
            <View className="flex items-center">
              <TouchableOpacity
                className="w-full h-44 p-4 bg-white shadow-md flex items-center justify-center rounded-lg"
                onPress={() => {
                  navigation.navigate("Activities");
                }}
              >
                <View className="flex-row justify-between">
                  <View className="w-52">
                    <Text className="text-base text-gray-500 font-bold ">
                      Test History
                    </Text>
                    <Text className="text-sm text-gray-500 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vestibulum ante ipsum primis in faucibus orci luctus.
                    </Text>
                  </View>

                  <Image
                    style={{ width: 110, height: 110 }}
                    source={require("../../assets/hobbies.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomePanel;
