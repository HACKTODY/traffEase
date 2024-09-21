import React from "react";
import {
  View,
  Image,
  Text,
  Pressable,
  Linking,
  TouchableOpacity,
} from "react-native";
import Group from "./../../../assets/images/Group.png";
import { useNavigation } from "@react-navigation/native";
const AutoLayoutTop = ({ value }) => {
  const navigation = useNavigation();
  const handleOpenURL = () => {
    const url = "https://ispm-edu.com/actualites.php"; // Remplace par ton URL
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open URL:", err);
    });
  };
  if (value == 1) {
    return (
      <View className="flex flex-row w-screen bg-slate-900 justify-between items-center pr-10">
        <View className="bg-slate-900 pt-10 flex justify-center items-start pl-10 pr-10 pb-10">
          <Pressable onPress={() => navigation.navigate("homeScreen")}>
            <Image source={Group} />
          </Pressable>
        </View>
        <TouchableOpacity onPress={handleOpenURL}>
          <Text
            className="text-primary-default"
            style={{ textDecorationLine: "underline" }}
          >
            ... Plus d'info ISPM ...
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View className="bg-slate-900 pt-10 flex justify-center items-start pl-10 pr-10 pb-10">
        <Pressable onPress={() => navigation.navigate("Home")}>
          <Image source={Group} />
        </Pressable>
      </View>
    );
  }
};

export default AutoLayoutTop;
