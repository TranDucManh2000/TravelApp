import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { AntDesign } from "@expo/vector-icons";
import { AntDesignFix } from "../common/SearchTravle";

const Startpage1 = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../image/Traveling_Monochromatic1.png")}
        style={styles.startImg}
        resizeMode="contain"
      />
      <Text style={styles.size28}>Make your own private travel plan</Text>
      <Text style={styles.size18blo}>
        Formulate your strategy to receive wonderful gift packs
      </Text>
      <View
        style={styles.btnnex}
        onTouchStart={() => navigation.navigate("start2")}
      >
        <AntDesignFix name="arrowright" size={34} color="#fff" />
      </View>
      <View style={styles.size14}>
        <Text>
          <Image source={require("../image/Zaps.png")} />
          <Text>Nordic Vacation Sponsor</Text>
        </Text>
      </View>
    </View>
  );
};

export default Startpage1;
