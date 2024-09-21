import React from "react";
import { Image, View } from "react-native";
import OnboardingBottom from "../components/sections/OnboardingBottom";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingImage from "./../../assets/images/Frame2.png";

const Onboarding2 = () => {
  return (
    <SafeAreaView>
      <View className="bg-slate-900 w-[100%] h-[100%] flex justify-center items-center gap-8">
        <Image source={OnboardingImage} style={{ objectFit: "cover" }} />
        <OnboardingBottom
          title="Get Real Time Data for the information You Need"
          description="Access real-time data for the information that matters most to you. Stay updated on schedules, arrivals, and departures with accurate time insights. Make informed decisions with timely information at your fingertips."
          navigateClick="signin"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding2;
