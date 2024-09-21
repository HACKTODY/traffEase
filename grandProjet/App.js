import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./global.css"; 
import Onboarding from "./src/screens/Onboarding";
import SignIn from "./src/screens/SignIn";
import Onboarding1 from "./src/screens/Onboarding1";
import Onboarding2 from "./src/screens/Onboarding2";
import HomeScreen from "./src/screens/HomeScreen";
import About from "./src/screens/About";
import MapScreen from "./src/screens/MapScreen";
import LoadingScreen from "./src/screens/LoadingScreen";
import { useState,useEffect } from "react";
import * as Font from "expo-font";


const Stack = createNativeStackNavigator();

function App() {
   const [fontLoaded, setFontLoaded] = useState(false);

   useEffect(() => {
     const loadFonts = async () => {
       await Font.loadAsync({
         "cals-sans": require("./assets/font/CalSans-SemiBold.ttf"),
         "Montserrat-ExtraBold": require("./assets/font/Montserrat-ExtraBold.ttf"),
         "Montserrat-Medium": require("./assets/font/Montserrat-Medium.ttf"),
         "Montserrat-Regular": require("./assets/font/Montserrat-Regular.ttf"),
         "Montserrat-Light": require("./assets/font/Montserrat-Light.ttf"),
         "Montserrat-SemiBold": require("./assets/font/Montserrat-SemiBold.ttf"),
       });
       setFontLoaded(true);
     };

     loadFonts();
   }, []);

   if (!fontLoaded) {
     return null;
   }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="first"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="second"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="aboutScreen"
          component={About}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="mapScreen"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="loading"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
