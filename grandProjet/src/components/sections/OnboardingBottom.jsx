import React from "react";
import { View, Text } from "react-native";
import { Button } from "../UI/button";
import { useNavigation } from "@react-navigation/native";
const OnboardingBottom = ({ title, description,navigateClick }) => {
  const navigation = useNavigation();
  return (
    <View className="gap-10 bg-slate-900 text-white pt-10 pb-10 p-2 ">
      <View className=" flex justify-center items-center text-center gap-2 leading-3 ">
        <Text className="text-[28px] font-calsSans text-center text-white">
          {title}
        </Text>
        <Text className="text-center font-montsseratRegular text-white">
          {description}
        </Text>
      </View>
      <View className="ml-5 mr-5">
        <Button
          className="ml-3 mr-3"
          onPress={() => navigation.navigate(`${navigateClick}`)}
        >
          Next
        </Button>
      </View>
    </View>
  );
};

export default OnboardingBottom;
