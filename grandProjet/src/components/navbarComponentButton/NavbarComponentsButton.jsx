import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

const NavbarComponentsButton = ({image,title,color,onClick}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={()=>navigation.navigate(`${onClick}`)}>
        <View className="flex flex-col justify-center items-center">
          <Image source={image} />
          <Text className={color}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
};

export default NavbarComponentsButton;