import React from 'react';
import NavLayout from '../../layouts/NavLayout';
import { View,Image,Text } from 'react-native';
const AboutComponent = ({img,text,title}) => {
    return (
      <View className="w-screen h-screen bg-slate-900">
        
          <View className="flex justify-center text-center">
            <View className="flex flex-row justify-around items-center">
              <View
                className="bg-white w-24 h-24 flex text-center justify-center items-center"
                style={{ borderRadius: 50, overflow: "hidden" }}
              >
                <Image source={img} className="w-20 h-20" />
              </View>
              <Text className="text-primary-default text-[35px]  font-calsSans">
                {title}
              </Text>
            </View>
            <Text className="text-white">
              {text}
            </Text>
          </View>
      </View>
    );
};

export default AboutComponent;