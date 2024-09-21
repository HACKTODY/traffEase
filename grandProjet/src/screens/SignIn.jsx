import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AutoLayouts from "../layouts/AutoLayouts";
import LandingSignin from "../components/sections/Signin/LandingSignin";
import Form from "../../Form";
const SignIn = () => {
  return (
    <SafeAreaView>
      <View>
        <AutoLayouts value="0">
          <LandingSignin />
        </AutoLayouts>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
