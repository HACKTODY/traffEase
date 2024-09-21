import React from "react";
import { View, Text } from "react-native";
import NavLayout from "../layouts/NavLayout";
import { SafeAreaView } from "react-native-safe-area-context";
import Map from "../components/maps/Map";


const MapScreen = () => {
  return (
    <SafeAreaView>
      <View className="w-screen h-screen bg-slate-900">
        <Map/>
      </View>
    </SafeAreaView>
  );
};

export default MapScreen;
