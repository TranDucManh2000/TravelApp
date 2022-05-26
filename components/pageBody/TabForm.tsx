import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { customStyles, labels } from "../faceData/FaceData";
import { stepstyles } from "../pagestyles/StepStyles";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab: any = createMaterialTopTabNavigator();

const TabForm = ({ valuetab }: any) => {
  if (true) {
    console.log(valuetab);
  }
  const Day1 = () => (
    <View style={stepstyles.containerAline}>
      <View style={{ height: 3 * 100 }}>
        <StepIndicator
          customStyles={customStyles}
          stepCount={3}
          currentPosition={2}
          direction="vertical"
          labels={labels.map((item: any) => item.name)}
        />
      </View>
    </View>
  );

  const Day2 = () => <View />;
  const Day3 = () => <View />;
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

export default TabForm;
