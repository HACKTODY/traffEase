import React from 'react';
import { View,TextInput,Image} from 'react-native';
import location from "./../../../assets/images/Document.png";
const InputCommon = ({placeholder,source,value,onChangeText}) => {
    return (
        <View className="w-[90%] h-20 bg-white rounded-[50px] flex flex-row justify-center pl-5 items-center">
            <TextInput placeholder={placeholder} className="w-[70%] h-20" value={value} onChangeText={onChangeText}/>
            <Image source={source} className="w-10 h-10"/>
        </View>
    );
};

export default InputCommon;