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
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import {ArrowRightIcon,  Bars3BottomRightIcon, HomeIcon } from "react-native-heroicons/outline";

const Activities = () => {
   const navigation = useNavigation();
   const style = StyleSheet.create({
      size: {
         width: 353,
         height: 180,
      },
   });
   return (
      <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
         <View className="pt-3 flex-row justify-between items-center">
            <Text className="text-xl font-bold">
                  Excercise and Activities for Depression
            </Text>
            <TouchableOpacity 
               className="w-10 h-10 shadow-sm flex items-center justify-center rounded-3xl self-center bg-cyan-900"
               onPress={()=> navigation.navigate("HomePanel")}
            >
               
               <HomeIcon className="shadow-md " color="#fff"/>
            </TouchableOpacity>
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
               source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/arts_crafts.png")}
               className="rounded-lg"
            />
            <View className="py-3 ">
               <Text className="text-base text-justify text-gray-500 pb-3">
               Coping with depression can feel like an uphill battle as it saps
               your energy, motivation and self-esteem. Finding ways to climb out
               of a depressive episode is not easy, but understanding the illness
               and how it affects you specifically is the first step to being
               able to find the coping mechanisms that work best for you.
               </Text>
            </View>
            <View>
               <Text className="text-lg font-bold">
                  Activities to Help with Depression
               </Text>
               <View className="mb-5">
                  <View className="flex-row justify-between">
                     <Text className="text-base text-gray-500 font-semibold">
                        Outdoor Activities
                     </Text>
                     <ArrowRightIcon color="#a3a3a3"/>
                  </View>
                  <ScrollView
                     horizontal
                     contentContainerStyle={{
                        paddingHorizontal: 2,
                     }}
                     showsHorizontalScrollIndicator={false}
                     className="pt-4"
                     style={{ flexGrow: 0 }}
                  >
                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Walk")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Outdoor/walking.jpg")}
                           className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">
                           Taking a walk
                        </Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              Whether it comes in the form of a stroll through a park,
                              a tour around your neighborhood or taking your pet for a
                              walk.
                           </Text>
                        </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Bike")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Outdoor/riding_bike.jpg")}
                           className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">
                           Riding a bike
                        </Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              Refocus your mind to pedaling and enjoy the endorphins
                              from riding a bike. If bikes aren’t your thing, try
                              rollerblading or skateboarding.
                           </Text>
                        </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Swimming")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Outdoor/swimming.jpg")}
                           className="rounded-sm w-64 h-28"
                          
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">Swimming</Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              The beach can be an underrated spot, especially when
                              it’s not summertime. Bring a book or some music along.
                           </Text>
                        </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("OutReading")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Outdoor/outdoor_reading.jpg")}
                           className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">
                           Outdoor Reading
                        </Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              Sometimes, being among a crowd of people can be
                              comforting and make you feel less lonely and isolated.
                           </Text>
                        </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Gardening")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Outdoor/gardening.jpg")}
                           className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                           <Text className="text-base my-1 font-bold">Gardening</Text>
                           <View>
                              <Text className="text-xs mb-2 text-justify text-gray-500">
                                 Working with plants, especially with your hands, has
                                 proved to lessen the severity of depression.
                              </Text>
                           </View>
                        </View>
                     </TouchableOpacity>

                  </ScrollView>
               </View>
               <View className="mb-5">
                  <View className="flex-row justify-between">
                     <Text className="text-base text-gray-500 font-semibold">
                        Indoor Activities
                     </Text>
                     <ArrowRightIcon color="#a3a3a3"/>
                  </View>
                  <ScrollView
                     horizontal
                     contentContainerStyle={{
                        paddingHorizontal: 2,
                     }}
                     showsHorizontalScrollIndicator={false}
                     className="pt-4"
                     style={{ flexGrow: 0 }}
                  >
                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Cooking")}
                     >
                        <Image
                        source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/cooking.jpg")}
                        className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">Cooking</Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              Preparing a meal for yourself is an excellent way to
                              keep busy, do something creative and have something
                              tasty to eat at the end.
                           </Text>
                        </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Bath")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/bath.jpg")}
                           className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                           <Text className="text-base my-1 font-bold">
                              Taking a bath
                           </Text>
                           <View>
                              <Text className="text-xs mb-2 text-justify text-gray-500">
                                 There’s a reason baths are so luxurious, and part of
                                 that is because they make you so comfortable.
                              </Text>
                           </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("InReading")}
                     >
                        <Image
                           source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/reading.jpg")}
                           className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                           <Text className="text-base my-1 font-bold">Reading</Text>
                           <View>
                              <Text className="text-xs mb-2 text-justify text-gray-500">
                                 Sometimes, there's nothing better than getting lost in a
                                 good mystery book or spend some time learning about
                                 ancient history.
                              </Text>
                           </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("ArtsCrafts")}
                     >
                        <Image
                        source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/arts_crafts.png")}
                        className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">
                           Arts and Crafts
                        </Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              Creativity is an ideal way to express yourself, and it
                              can help you do that even when you don’t intend to.
                           </Text>
                        </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Games")}
                     >
                        <Image
                        source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/indoor_games.jpg")}
                        className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                           <Text className="text-base my-1 font-bold">Games</Text>
                           <View>
                              <Text className="text-xs mb-2 text-justify text-gray-500">
                                 Video games and old-fashioned puzzles are fun activities
                                 for depression that help you refocus your mind and also
                                 stimulate it.
                              </Text>
                           </View>
                        </View>
                     </TouchableOpacity>

                     <TouchableOpacity 
                        className="mb-2 mr-2 w-64 bg-white shadow-sm"
                        onPress={()=> navigation.navigate("Chores")}
                     >
                        <Image
                        source={require("../../assets/AcitvitiesImage/HelpDepression/Indoor/chores.jpg")}
                        className="rounded-sm w-64 h-28"
                        />
                        <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">Chores</Text>
                           <View>
                              <Text className="text-xs mb-2 text-justify text-gray-500">
                                 Some people find household chores to be calming and
                                 therapeutic. Washing dishes allows you to refocus your
                                 mind.
                              </Text>
                           </View>
                        </View>
                     </TouchableOpacity>
                  </ScrollView>
               </View>
            </View>

            <View className="mb-5">
               <View className="flex-row justify-between">
                  <Text className="text-lg font-bold">
                     For People with Depression
                  </Text>
                  <ArrowRightIcon color="#a3a3a3"/>
               </View>
               <ScrollView
                  horizontal
                  contentContainerStyle={{
                     paddingHorizontal: 2,
                  }}
                  showsHorizontalScrollIndicator={false}
                  className="pt-4"
                  style={{ flexGrow: 0 }}
               >
               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("Massage")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/PeopleDepression/massage.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">
                     Get a massage
                     </Text>
                     <View>
                        <Text className="text-xs mb-2 text-justify text-gray-500">
                           If baths don't do anything for you, book a massage for
                           yourself and allow a professional to help you relax.
                        </Text>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("HaveBite")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/PeopleDepression/have_bite.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">Have a bite</Text>
                     <View>
                     <Text className="text-xs mb-2 text-justify text-gray-500">
                        Treat yourself to a meal with your favorites. Bring a book
                        along and do some people-watching while enjoying a meal.
                     </Text>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("WatchMovie")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/PeopleDepression/watch_movie.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">
                     Watch a movie
                     </Text>
                     <View>
                     <Text className="text-xs mb-2 text-justify text-gray-500">
                        Going to the movies by yourself good. Get lost in a great
                        movie often in a theater that’s pretty much empty.
                     </Text>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("GetCultured")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/PeopleDepression/get_cultured.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">
                     Get Cultured
                     </Text>
                     <View>
                     <Text className="text-xs mb-2 text-justify text-gray-500">
                           If you feel you’re not artistic yourself, enrich your day by visiting 
                           an art gallery or museum and enjoy the work of others.
                     </Text>
                     </View>
                  </View>
               </TouchableOpacity>
               </ScrollView>
            </View>

            <View className="mb-5">
               <View className="flex-row justify-between">  
                  <Text className="text-lg font-bold">
                     For Adults with Depression
                  </Text>
                  <ArrowRightIcon color="#a3a3a3"/>
               </View>
               <ScrollView
               horizontal
               contentContainerStyle={{
                  paddingHorizontal: 2,
               }}
               showsHorizontalScrollIndicator={false}
               className="pt-4"
               style={{ flexGrow: 0 }}
               >
               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("Yoga")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/AdultTherapy/yoga.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">
                     Yoga
                     </Text>
                     <View>
                     <Text className="text-xs mb-2 text-justify text-gray-500">
                           Since this ancient practice is a spiritual one at its core, 
                           the benefits of yoga go beyond physical.
                     </Text>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("Meditation")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/AdultTherapy/meditation.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">Meditation</Text>
                     <View>
                        <Text className="text-xs mb-2 text-justify text-gray-500">
                           Like yoga, meditation is an excellent way for you to learn 
                           how to relax your mind and efficiently refocus it.
                        </Text>
                     </View>
                  </View>
               </TouchableOpacity>

               <TouchableOpacity 
                  className="mb-2 mr-2 w-64 bg-white shadow-sm"
                  onPress={()=> navigation.navigate("Coloring")}
               >
                  <Image
                     source={require("../../assets/AcitvitiesImage/AdultTherapy/coloring.jpg")}
                     className="rounded-sm w-64 h-28"
                  />
                  <View className="px-2 pb-2">
                     <Text className="text-base my-1 font-bold">
                        Coloring
                     </Text>
                     <View>
                        <Text className="text-xs mb-2 text-justify text-gray-500">
                           Adult coloring books may seem like a fad, 
                           but they have legitimate value in treating depression. 
                        </Text>
                     </View>
                  </View>
               </TouchableOpacity>

               </ScrollView>
            </View>

            <View className="mb-5">
               <Text className="text-lg font-bold">
                  Professional Help for Depression
               </Text>
               <ScrollView
                  horizontal
                  contentContainerStyle={{
                     paddingHorizontal: 0,
                  }}
                  showsHorizontalScrollIndicator={false}
                  className="pt-4"
                  style={{ flexGrow: 0 }}
               >
                  <TouchableOpacity 
                     className="mb-2 mr-2 w-64 bg-white shadow-sm"
                     onPress={()=> navigation.navigate("ProfessionalHelp")}
                  >
                     <Image
                        source={require("../../assets/AcitvitiesImage/ProfessionalHelp/prof_help.jpg")}
                        className="rounded-sm w-64 h-28"
                     />
                     <View className="px-2 pb-2">
                        <Text className="text-base my-1 font-bold">
                           Getting a help from professional
                        </Text>
                        <View>
                           <Text className="text-xs mb-2 text-justify text-gray-500">
                              Treatment can stabilize someone who has suicidal thoughts 
                              and provides them with the support and tools they need.
                           </Text>
                        </View>
                     </View>
                  </TouchableOpacity>
               </ScrollView>
            </View>
         </ScrollView>
         </View>
      </SafeAreaView>
   );
};

export default Activities;
