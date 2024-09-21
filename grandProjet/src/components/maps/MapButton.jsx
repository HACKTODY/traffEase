import React from 'react';
import { TouchableOpacity,View,Text,Image } from 'react-native';
import voiture from "./../../../assets/images/voiture2.png";
import droit from "./../../../assets/images/droit2.png";
const MapButton = ({onPress}) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View className="w-[100%] h-20 bg-yellow-200 rounded-[50px] flex flex-row justify-around items-center text-center pr-5">
          <View className="w-[20%] h-15 bg-white rounded-[50px] border-2 flex justify-center items-center">
            <Image source={voiture}/>
          </View>
          <Text className="text-[25px]">Let's Go</Text>
          <Image source={droit}/>
        </View>
      </TouchableOpacity>
    );
};

export default MapButton;