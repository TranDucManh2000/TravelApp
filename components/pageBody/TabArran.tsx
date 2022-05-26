import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";
import { stepstyles } from "../pagestyles/StepStyles";
import { styles } from "../pagestyles/Createstyles";
import { commons } from "../pagestyles/CommonStyles";
import { fontext } from "../pagestyles/FontStyles";
import { AntDesignFix } from "../common/SearchTravle";
import { Entypo } from "@expo/vector-icons";
import { labels } from "../faceData/FaceData";

const Tab: any = createMaterialTopTabNavigator();
export const EntypoFix: Function = Entypo;

const TabArran = () => {
  const Day1 = () => (
    <View style={styles.container}>
      {labels.map((vl: any, index) => (
        <View style={styles.marginTopAndBotTom} key={index}>
          <View style={styles.flexRowBettenw100}>
            <View style={commons.initinputauto}>
              <AntDesignFix name="clockcircleo" size={20} color="black" />
              <Text style={fontext.font16boll}>5:30</Text>
            </View>
            <View style={commons.initinput70}>
              <View style={styles.flexRowBetten}>
                <Text style={fontext.font24boll}>Wake up</Text>
                <EntypoFix name="cloud" size={24} color="#0373F3" />
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          marginTop: 20,
          marginBottom: 10,
        },
        tabBarActiveTintColor: "#0373F3",
      }}
    >
      <Tab.Screen name="Day 1" component={Day1} />
      <Tab.Screen name="Day 2" component={Day1} />
      <Tab.Screen name="Day 3" component={Day1} />
    </Tab.Navigator>
  );
};

export default TabArran;
