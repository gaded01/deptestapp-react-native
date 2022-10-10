import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
	Text, 
	SafeAreaView,
	TextInput, 
	StyleSheet, 
	Button,
   View,
   Image,
   TouchableOpacity
} from "react-native";
import axios from "axios";
import {REACT_APP_BASE_API_URL} from '@env';
import SafeViewAndroid from "../components/SafeViewAndroid";
import Spinner from 'react-native-loading-spinner-overlay';


const Register = () => {
	const navigation = useNavigation();
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      email : '',
      age : '',
   })

	useLayoutEffect(() => 
		navigation.setOptions({
			headerShown: false,
		})
	);

   const inputHandler = (prop, value) => {
      setData({...data, [prop]: value})
   }

   const submitRegistration = () => {
      setLoading(true);
      const register = async () => {
         try {
            const res = await axios.post(`${REACT_APP_BASE_API_URL}/user-signup`, data);
            if(res.data.status !== 'failed'){
               alert('Registration Success');
               setData('')
               setLoading(false);
              
            }
            else{
               alert(res.data.message);
               setLoading(false);
            }
           
         } catch (error) {
            console.log(error)
         }
      }
      register();
   }

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View>
			   <View className="flex flex-row justify-center mt-10">
               <Image
                  source={require("../../assets/app-logo.png")}
                  className="h-40 w-40"
               />
            </View>
            <Text className="mb-4 mt-2 text-lg font-bold text-center">Register Here</Text>
            <TextInput
               className="p-3 rounded-md border mb-3"
               onChangeText={(email) => inputHandler('email', email)}
               placeholder="Enter Email"
               value={data.email}

            />
            <TextInput
               className="p-3 rounded-md border mb-5"
               onChangeText={(age) => inputHandler('age', age)}
               placeholder="Enter Age"
               value={data.age}
            />
            <TouchableOpacity 
               className="bg-sky-700 rounded-lg"
               onPress={submitRegistration}
            >
               <Text className="text-white text-base p-3 text-center">Register</Text>
            </TouchableOpacity>
            <Text className="mt-5 text-base text-center">
					Want to login?
				<Text className="text-sky-700" onPress={()=>{navigation.navigate('Login')}}>
					{" "}Click here to login.
				</Text>
			   </Text>
         </View>  
         <Spinner
            visible={loading}
         />
      </SafeAreaView>
	);
};
export default Register;
