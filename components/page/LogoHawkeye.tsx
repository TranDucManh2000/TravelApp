import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Image, Text, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";

const LogoHawkeye = ({ navigation }: any) => {
  return (
    <View
      onTouchStart={() => navigation.navigate("start1")}
      style={styles.logopage}
    >
      <LinearGradient colors={["#68D6CA", "#2E60F4"]} style={styles.logopage}>
        <Image source={require("../image/logo.png")} style={styles.logo} />
      </LinearGradient>
    </View>
  );
};

export default LogoHawkeye;
