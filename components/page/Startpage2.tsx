import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { AntDesignFix } from "../common/SearchTravle";

const Startpage2 = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../image/Group6932.png")}
        style={styles.startImg}
        resizeMode="contain"
      />
      <Text style={styles.size28}>Customize your High-end travel</Text>
      <Text style={styles.size18blo}>
        Countless high-end entertainment facilities
      </Text>
      <View
        onTouchStart={() => navigation.navigate("start3")}
        style={styles.btnnex}
      >
        <AntDesignFix name="arrowright" size={34} color="#fff" />
      </View>
      <View style={styles.size14}>
        <Text>
          <Image
            source={require("../image/Zaps.png")}
            style={{ width: 24, height: 24 }}
          />
          <Text>Nordic Vacation Sponsor</Text>
        </Text>
      </View>
    </View>
  );
};

export default Startpage2;
