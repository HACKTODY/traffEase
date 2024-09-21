import React from 'react';
import { TouchableOpacity,Image,Text,View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ButtonCommon = ({image,text,onClick}) => {
  const navigation = useNavigation();
    return (
      <TouchableOpacity onPress={onClick}>
        <View
          style={{ backgroundColor: "rgba(128, 128, 128, 0.226)",borderColor:"white",borderWidth:1,borderRadius:10 }}
          className="pl-[20%] pr-[20%] flex flex-row p-6 gap-2"
        >
          <Image source={image} />
          <Text className="text-white">{text}</Text>
        </View>
      </TouchableOpacity>
    );
};

export default ButtonCommon;