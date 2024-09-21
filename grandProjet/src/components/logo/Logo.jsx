import React from "react";
import { View, Image } from "react-native";
import logo from "./../../../assets/images/logo.png";
import ispm from "./../../../assets/images/ISPM.jpg";
const Logo = () => {
  return (
    <View className="absolute w-screen h-20 mt-10 flex flex-row justify-between">
      <View
        className="bg-white w-24 h-24 flex text-center justify-center items-center"
        style={{ borderRadius: 50 }}
      >
        <Image source={logo} className="w-28 h-28" />
      </View>
      <View
        className="bg-white w-24 h-24 flex text-center justify-center items-center"
        style={{ borderRadius: 50,overflow:"hidden" }}
      >
        <Image source={ispm} className="w-20 h-20" />
      </View>
    </View>
  );
};

export default Logo;
