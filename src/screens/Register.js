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
import SelectDropdown from 'react-native-select-dropdown'
import Spinner from 'react-native-loading-spinner-overlay';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { interpolate } from "react-native-reanimated";
import {ChevronDownIcon} from "react-native-heroicons/outline";

const user_types = [
   { id: "0", type: "Guidance Councilor" },
   { id: "1", type: "Student" },
   { id: "2", type: "Others" }
];

const Register = () => {
	const navigation = useNavigation();
   const [loading, setLoading] = useState(false);
   const [data, setData] = useState({
      email : '',
      age : '',
      role: '',
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
      console.log(data)
      setLoading(true);
      const register = async () => {
         try {
            const res = await axios.post(`${REACT_APP_BASE_API_URL}/user-signup`, data);
            if(res.data.status !== 'failed'){
               alert('Registration Success');
               setData('')
               setLoading(false);
               navigation.navigate('Login');
              
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
               className="p-3 rounded-md border mb-3 text-gray-600"
               onChangeText={(email) => inputHandler('email', email)}
               placeholder="Enter Email"
               value={data.email}

            />
            <TextInput
               className="p-3 rounded-md border mb-5 text-gray-600"
               onChangeText={(age) => inputHandler('age', age)}
               placeholder="Enter Age"
               value={data.age}
            />
            <SelectDropdown
               data={user_types}
               buttonStyle={{backgroundColor:"white", width: "100%", borderWidth: .5, borderRadius: 5}}
               buttonTextStyle={{color: "#686868", textAlign: "justify", fontSize: 15}}
               defaultButtonText={"Select user type"}
               buttonTextAfterSelection={(selectedType, index) => {
                  return selectedType.type;
               }}
               rowTextForSelection={(userType, index) => {
                  return userType.type;
               }}
               renderDropdownIcon={()=>{
                  return <ChevronDownIcon className="shadow-md " color="#686868"/>
               }}
               onSelect={(selectedItem, index) => {
                  setData({...data, role: selectedItem.id})
               }}
            />
            <TouchableOpacity 
               className="bg-cyan-900 mt-4 rounded-lg h-14"
               onPress={submitRegistration}
            >
               <Text className="text-white text-base px-3 pt-4 text-center">Register</Text>
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
