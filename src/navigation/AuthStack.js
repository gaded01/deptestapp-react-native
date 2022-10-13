import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import HomePanel from "../screens/HomePanel";
import HomeScreen from "../screens/HomeScreen";
import Beck from "../screens/BeckTest/index";
import Usdi from "../screens/UsdiTest/index";
import Activities from "../screens/Activities";
import Walk  from "../screens/AcitvitiesScreens/HelpDepression/Outdoor/Walk";
import Bike  from "../screens/AcitvitiesScreens/HelpDepression/Outdoor/Bike";
import OutReading  from "../screens/AcitvitiesScreens/HelpDepression/Outdoor/OutReading";
import Gardening  from "../screens/AcitvitiesScreens/HelpDepression/Outdoor/Gardening";
import Swimming  from "../screens/AcitvitiesScreens/HelpDepression/Outdoor/Swimming";
import ArtsCrafts  from "../screens/AcitvitiesScreens/HelpDepression/Indoor/ArtsCrafts";
import Bath  from "../screens/AcitvitiesScreens/HelpDepression/Indoor/Bath";
import Chores  from "../screens/AcitvitiesScreens/HelpDepression/Indoor/Chores";
import Cooking  from "../screens/AcitvitiesScreens/HelpDepression/Indoor/Cooking";
import Games  from "../screens/AcitvitiesScreens/HelpDepression/Indoor/Games";
import InReading  from "../screens/AcitvitiesScreens/HelpDepression/Indoor/InReading";
import GetCultured  from "../screens/AcitvitiesScreens/PeopleDepression/GetCultured";
import HaveBite  from "../screens/AcitvitiesScreens/PeopleDepression/HaveBite";
import Massage  from "../screens/AcitvitiesScreens/PeopleDepression/Massage";
import WatchMovie  from "../screens/AcitvitiesScreens/PeopleDepression/WatchMovie";
import Coloring  from "../screens/AcitvitiesScreens/AdultTherapy/Coloring";
import Meditation  from "../screens/AcitvitiesScreens/AdultTherapy/Meditation";
import Yoga  from "../screens/AcitvitiesScreens/AdultTherapy/Yoga";
import ProfessionalHelp  from "../screens/AcitvitiesScreens/ProfessionalHelp/index";
import PrivacyPolicy  from "../screens/PrivacyPolicy";
import BeckResult  from "../screens/BeckTest/Questions/index";
import UsdiResult  from "../screens/UsdiTest/Test/Result";
import UsdiQuestion from "../screens/UsdiTest/Test/index";
import BeckQuestion from "../screens/BeckTest/Questions/index";
import Logout from "../screens/Logout";




const Stack = createNativeStackNavigator();
const AuthStack = () => {
   return ( 
      <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="HomePanel" component={HomePanel}/>
         <Stack.Screen name="HomeScreen" component={HomeScreen}/>
         <Stack.Screen name="Beck" component={Beck}/>
         <Stack.Screen name="Usdi" component={Usdi}/>
         <Stack.Screen name="Activities" component={Activities}/>
         <Stack.Screen name="Walk" component={Walk}/>
         <Stack.Screen name="Bike" component={Bike}/>
         <Stack.Screen name="OutReading" component={OutReading}/>
         <Stack.Screen name="Gardening" component={Gardening}/>
         <Stack.Screen name="Swimming" component={Swimming}/>
         <Stack.Screen name="ArtsCrafts" component={ArtsCrafts}/>
         <Stack.Screen name="Bath" component={Bath}/>
         <Stack.Screen name="Chores" component={Chores}/>
         <Stack.Screen name="Cooking" component={Cooking}/>
         <Stack.Screen name="Games" component={Games}/>
         <Stack.Screen name="InReading" component={InReading}/>
         <Stack.Screen name="GetCultured" component={GetCultured}/>
         <Stack.Screen name="HaveBite" component={HaveBite}/>
         <Stack.Screen name="Massage" component={Massage}/>
         <Stack.Screen name="WatchMovie" component={WatchMovie}/>
         <Stack.Screen name="Coloring" component={Coloring}/>
         <Stack.Screen name="Meditation" component={Meditation}/>
         <Stack.Screen name="Yoga" component={Yoga}/>
         <Stack.Screen name="ProfessionalHelp" component={ProfessionalHelp}/>
         <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
         <Stack.Screen name="BeckResult" component={BeckResult}/>
         <Stack.Screen name="UsdiResult" component={UsdiResult}/>
         <Stack.Screen name="UsdiQuestion" component={UsdiQuestion}/>
         <Stack.Screen name="BeckQuestion" component={BeckQuestion}/>
         <Stack.Screen name="Logout" component={Logout}/>
         {/* <Stack.Screen name="Root" component={Root}  options={{ headerShown: false }}/> */}
      </Stack.Navigator>
   );
}
export default AuthStack; 
