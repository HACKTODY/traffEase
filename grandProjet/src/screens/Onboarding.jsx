import React from 'react';
import { Image,View} from 'react-native';
import OnboardingBottom from '../components/sections/OnboardingBottom';
import { SafeAreaView } from 'react-native-safe-area-context';
import OnboardingImage from "./../../assets/images/Frame.png";

const Onboarding = () => {
  return (
    <SafeAreaView>
      <View className="bg-slate-900 w-[100%] h-[100%] flex justify-center items-center gap-8">
        <Image
          source={OnboardingImage}
          style={{ objectFit: "cover" }}
          className=""
        />
        <OnboardingBottom
          title="Find and Navigate to Places Around You Easily"
          description="Discover nearby places effortlessly with just a tap. Whether you're looking for a restaurant, a store, or a landmark, navigating has never been easier. Let us guide you to your destination with accurate directions and real-time updates."
          navigateClick="first"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;