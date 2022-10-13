import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
import { REACT_APP_BASE_API_URL } from "@env";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Spinner from 'react-native-loading-spinner-overlay';

const LoginScreen = ({ navigate }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  useLayoutEffect(() =>
    navigation.setOptions({
      headerShown: false,
    })
  );
  const storeToken = async (value) => {
     const res = await AsyncStorage.setItem("@access_token", value);
     return res;
  };
  
  const submitLogin = () => {
    const submit_email = {email: email};
    setLoading(true);
    axios.post(`${REACT_APP_BASE_API_URL}/user-login`, submit_email)
      .then((res) => {
        setLoading(false);
        if (res.data.status !== "failed") {
          console.log(res.data.access_token);
          storeToken(res.data.access_token);
          navigation.navigate("HomePanel");
        } else {
          alert(res.data.result);
        }
       
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View>
        <View className="flex flex-row justify-center mt-10">
          <Image
            source={require("../../assets/app-logo.png")}
            className="h-40 w-40"
          />
        </View>
        <Text className="mb-4 mt-2 text-lg font-bold text-center">Login Form</Text>
        <TextInput
          className="p-3 rounded-md border mb-5"
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Email"
        />
        <TouchableOpacity 
          className="bg-sky-700 rounded-lg"
          onPress={submitLogin}
        >
				  <Text className="text-white text-lg p-3 text-center">Login</Text>
			  </TouchableOpacity>
        <Text className="mt-5 text-base text-center">
          No account?
				  <Text className="text-sky-700" onPress={()=>{navigation.navigate("Register")}}>
					{" "}Click here to register.
				  </Text>
			  </Text>
      </View>
      <Spinner
        visible={loading}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
