import React from 'react';
import { View,Image,Text } from 'react-native';
import LoginForm from '../../../common/forms/LoginForm';
import or from "./../../../../assets/images/Horizontal.png";
import { Button } from '../../UI/button';
import { useNavigation } from '@react-navigation/native';
const LandingSignin = () => {
    const navigation = useNavigation();
    return (
      <View className="bg-slate-900 justify-center items-center text-center gap-15 w-[100%] h-[100%] pb-[20%]">
        <Text className="text-white text-[35px]">
          Let's <Text className="text-primary-default">you in</Text>
        </Text>
        <View className="m-10">
          <LoginForm />
        </View>
      </View>
    );
};

export default LandingSignin;