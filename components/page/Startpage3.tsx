import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { AntDesign } from "@expo/vector-icons";
import { AntDesignFix } from "../common/SearchTravle";

const Startpage3 = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../image/Beach_Monochromatic3.png")}
        style={styles.startImg}
        resizeMode="contain"
      />
      <Text style={styles.size28}>
        High-end leisure projects to choose from
      </Text>
      <Text style={styles.size18blo}>
        The world's first-class modern leisure and entertainment method
      </Text>
      <View
        style={styles.btnnex}
        onTouchStart={() => navigation.navigate("signup")}
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

export default Startpage3;
