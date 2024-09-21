import React from "react";
import { Image, View } from "react-native";
import OnboardingBottom from "../components/sections/OnboardingBottom";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingImage from "./../../assets/images/Frame1.png";

const Onboarding1 = () => {
  return (
    <SafeAreaView>
      <View className="bg-slate-900 w-[100%] h-[100%] flex justify-center items-center gap-8">
        <Image source={OnboardingImage} style={{ objectFit: "cover" }} />
        <OnboardingBottom
          title="Manage Transportation Const and Booking"
          description="Take control of your transportation costs with ease. Whether you're booking a ride or managing expenses, our platform helps you stay on budget. Simplify your travel planning with seamless booking and cost tracking in one place"
          navigateClick="second"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding1;
