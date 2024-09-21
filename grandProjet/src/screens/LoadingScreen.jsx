import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container} className="w-screen h-screen bg-slate-900">
      <ActivityIndicator size="large" color="#ffff" />
      <Text style={styles.text} className="text-primary-default">Vérification...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default LoadingScreen;
