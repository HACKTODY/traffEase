import React, { Fragment } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Home from "./../../../assets/images/Home.png";
import About from "./../../../assets/images/Discovery.png";
import Map from "./../../../assets/images/Document.png";
import NavbarComponentsButton from "../navbarComponentButton/NavbarComponentsButton";
import { useNavigation } from "@react-navigation/native";
const LayoutNavbar = () => {
    const navigation = useNavigation();
  return (
    <Fragment>
      <View className=" absolute w-screen h-screen flex justify-end items-end">
        <View className="w-screen h-20 bg-slate-950 flex flex-row justify-around items-center">
          <NavbarComponentsButton
            image={Home}
            title="Home"
            color="text-primary-default"
            onClick="homeScreen"
          />
          <NavbarComponentsButton
            image={Map}
            title="Map"
            color="text-gray-500"
            onClick="mapScreen"
          />
          <NavbarComponentsButton
            image={About}
            title="About"
            color="text-gray-500"
            onClick="aboutScreen"
          />
        </View>
      </View>
    </Fragment>
  );
};

export default LayoutNavbar;
