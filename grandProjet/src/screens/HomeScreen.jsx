import React from "react";
import { View, Image, Text, ImageBackground, SafeAreaView } from "react-native";
import group from "./../../assets/images/Group1.png";
import vecto from "./../../assets/images/Vector1.png";
import group5 from "./../../assets/images/Group5.png";
import NavLayout from "../layouts/NavLayout";
import Logo from "../components/logo/Logo";
import cherche from "./../../assets/images/cherche.png";
import AnimationComponent from "../components/animations/AnimationComponent";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-screen h-screen bg-slate-900 ">
        <ImageBackground
          source={require("./../../assets/images/Vector1.png")}
          className="flex-1 justify-center items-center bg-center bg-no-repeat"
        >
          <ImageBackground className="w-screen h-screen " source={group}>
            <View className="w-scer h-screen">
              <NavLayout>
                <View className="absolut mt-28 w-screen h-2 flex justify-end text-end items-end pr-10">
                  <Image source={cherche} />
                </View>
                <Image source={group5} className="w-[100%] h-[60%]" />
                <View className="absolute w-screen h-screen flex justify-center items-center text-center">
                  {/* <Text className="text-primary-default text-[30px] font-montsseratExtraBold">
                    WELCOME
                  </Text>
                  <Text className="text-red-400 text-[25px] font-calsSans">TraffEase</Text> */}
                  <AnimationComponent />
                </View>
              </NavLayout>
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
