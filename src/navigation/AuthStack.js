import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import Register from "../screens/Register";
import HomePanel from "../screens/HomePanel";
import HomeScreen from "../screens/HomeScreen";
import Beck from "../screens/BeckTest/index";
import BeckHome from "../screens/BeckTest/BeckHome";
import UsdiHome from "../screens/UsdiTest/UsdiHome";
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
         <Stack.Screen name="BeckHome" component={BeckHome}/>
         <Stack.Screen name="UsdiHome" component={UsdiHome}/>
         <Stack.Screen name="Activities" component={Activities} 
         options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Walk" component={Walk} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Bike" component={Bike} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="OutReading" component={OutReading}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Gardening" component={Gardening}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Swimming" component={Swimming}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="ArtsCrafts" component={ArtsCrafts}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Bath" component={Bath}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Chores" component={Chores}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Cooking" component={Cooking}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Games" component={Games}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="InReading" component={InReading}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="GetCultured" component={GetCultured}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="HaveBite" component={HaveBite}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Massage" component={Massage}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="WatchMovie" component={WatchMovie}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Coloring" component={Coloring}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Meditation" component={Meditation}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="Yoga" component={Yoga}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="ProfessionalHelp" component={ProfessionalHelp}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy}
            options={{ 
                  headerShown: false,
                  drawerItemStyle: { display: 'none' } 
            }}
         />
         <Stack.Screen name="BeckResult" component={BeckResult}/>
         <Stack.Screen name="UsdiResult" component={UsdiResult}/>
         <Stack.Screen name="UsdiQuestion" component={UsdiQuestion}/>
         <Stack.Screen name="BeckQuestion" component={BeckQuestion}/>
         <Stack.Screen name="Logout" component={Logout}
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         {/* <Stack.Screen name="Root" component={Root}  options={{ headerShown: false }}/> */}
      </Stack.Navigator>
   );
}
export default AuthStack;
