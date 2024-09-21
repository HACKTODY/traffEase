import React, { useRef, useEffect } from "react";
import { View, Animated, Text } from "react-native";
import tw from "tailwind-react-native-classnames";

const AnimationComponent = () => {
  // Création de l'animation d'opacité
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation en boucle qui alterne entre 0 et 1
    Animated.loop(
      Animated.sequence([
        // Passe de 0 à 1 (apparition)
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000, // 1 seconde pour passer à 1
          useNativeDriver: true,
        }),
        // Passe de 1 à 0 (disparition)
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000, // 1 seconde pour repasser à 0
          useNativeDriver: true,
        }),
      ])
    ).start(); // Commence l'animation en boucle
  }, [fadeAnim]);

  return (
    <View>
      <Animated.Text
        style={[
          tw`text-4xl font-bold`, // Style Tailwind
          { opacity: fadeAnim }, // Applique l'animation d'opacité
        ]}
      >
        <Text className="text-primary-default font-montsseratExtraBold">
          WELCOME
        </Text>
        <Text>{"\n"}</Text>
        <Text className="text-red-400 font-calsSans">--TraffEase--</Text>
      </Animated.Text>
    </View>
  );
};

export default AnimationComponent;
