import { View, Image, Text, Alert } from "react-native";
import { Button } from "../../components/UI/button";
import fb from "./../../../assets/images/fb.png";
import google from "./../../../assets/images/google.png";
import Apple from "./../../../assets/images/Apple.png";
import ButtonCommon from "../button/ButtonCommon";
import or from "./../../../assets/images/Horizontal.png";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "../../screens/LoadingScreen";
import SignIn from "../../screens/SignIn";
import React, { useState } from "react";
const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const showAlert = () => {
    Alert.alert(
      "Confirmation",
      "Are you sur to login on your Google account",
      [
        {
          text: "Non",
          onPress: () => console.log("Annulé"),
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => {
            setLoading(true); // Afficher l'écran de chargement
            setTimeout(() => {
              setLoading(false); // Cacher l'écran de chargement
              navigation.navigate("homeScreen");
            }, 3000); // Temps de chargement en millisecondes
          },
        },
      ],
      { cancelable: false }
    );
  };
  if (loading) {
    return <LoadingScreen />;
  }
  const showAlert1 = () => {
    Alert.alert(
      "Confirmation",
      "Are you sur to login on your Facebook account",
      [
        {
          text: "Non",
          onPress: () => console.log("Annulé"),
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => {
            setLoading(true); // Afficher l'écran de chargement
            setTimeout(() => {
              setLoading(false); // Cacher l'écran de chargement
              navigation.navigate("homeScreen");
            }, 3000); // Temps de chargement en millisecondes
          },
        },
      ],
      { cancelable: false }
    );
  };
  const showAlert2 = () => {
    Alert.alert(
      "Confirmation",
      "Are you sur to login on your Apple account",
      [
        {
          text: "Non",
          onPress: () => console.log("Annulé"),
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => {
            setLoading(true); // Afficher l'écran de chargement
            setTimeout(() => {
              setLoading(false); // Cacher l'écran de chargement
              navigation.navigate("homeScreen");
            }, 3000); // Temps de chargement en millisecondes
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View className="bg-slate-900 flex justify-center text-center items-center ">
      <ButtonCommon
        image={fb}
        text="connect with facebook"
        onClick={showAlert1}
      />
      <Image source={or} />
      <ButtonCommon
        image={google}
        text="connect with Google"
        onClick={showAlert}
      />
      <Image source={or} />
      <ButtonCommon
        image={Apple}
        text="connect with Apple"
        onClick={showAlert2}
      />
    </View>
  );
};

export default LoginForm;
