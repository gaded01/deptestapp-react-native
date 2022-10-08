import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
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
;
import ProfessionalHelp  from "../screens/AcitvitiesScreens/ProfessionalHelp/index";
import PrivacyPolicy  from "../screens/PrivacyPolicy";

import BeckResult  from "../screens/BeckTest/Questions/index";
import UsdiResult  from "../screens/UsdiTest/Test/Result";
import UsdiQuestion from "../screens/UsdiTest/Test/index";
import BeckQuestion from "../screens/BeckTest/Questions/index";
import Logout from "../screens/Logout";



const Drawer = createDrawerNavigator();
const Root = () => {
   return ( 
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={HomeScreen} />
         <Drawer.Screen name="Activities" component={Activities} options={{ headerShown: false }}/>
         <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} options={{ headerShown: false }}/>
         <Drawer.Screen 
            name="UsdiQuestion" 
            component={UsdiQuestion} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="BeckQuestion" 
            component={BeckQuestion} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="UsdiResult" 
            component={UsdiResult} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="BeckResult" 
            component={UsdiResult} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Bike" 
            component={Bike} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' }
            }}
         />
         <Drawer.Screen 
            name="OutReading" 
            component={OutReading} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' }
            }}
         />
         <Drawer.Screen 
            name="Walk" 
            component={Walk} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' }
            }}
         />
         <Drawer.Screen 
            name="Swimming" 
            component={Swimming} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' }
            }}
         />
         <Drawer.Screen 
            name="Gardening" 
            component={Gardening} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' }
            }}
         />
         <Drawer.Screen 
            name="ArtsCrafts" 
            component={ArtsCrafts} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' }

            }}
         />
         <Drawer.Screen 
            name="Bath" 
            component={Bath} 
            options={{ 
               headerShown: false,
                drawerItemStyle: { display: 'none' }
            }}
         />
         <Drawer.Screen 
            name="Chores" 
            component={Chores} 
            options={{ 
               headerShown: false,
                drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Cooking" 
            component={Cooking} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Games" 
            component={Games} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="InReading" 
            component={InReading} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}/>
         <Drawer.Screen 
            name="GetCultured" 
            component={GetCultured} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="HaveBite" 
            component={HaveBite} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Massage" 
            component={Massage}
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="WatchMovie" 
            component={WatchMovie} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Coloring" 
            component={Coloring} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Meditation" 
            component={Meditation} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Yoga" 
            component={Yoga} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="ProfessionalHelp" 
            component={ProfessionalHelp} 
            options={{ 
               headerShown: false,
               drawerItemStyle: { display: 'none' } 
            }}
         />
         <Drawer.Screen 
            name="Logout" 
            component={Logout} 
            options={{ 
               headerShown: false,
            }}
         />
     
      </Drawer.Navigator>
   );
}

export default Root;

