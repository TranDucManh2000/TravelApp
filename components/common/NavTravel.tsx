import React from "react";
import { Foundation } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Frontpage from "../pageBody/Frontpage";
import Startpage3 from "../page/Startpage3";
import LtinerPage from "../pageBody/LtinerPage";
import QueryPage from "../pageBody/QueryPage";
import FrendPage from "../pageBody/FrendPage";

const Tab: any = createBottomTabNavigator();
export const FoundationFix: Function = Foundation;
export const IoniconsFix: Function = Ionicons;

const NavTravel = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarStyle: { borderTopEndRadius: 10, borderTopStartRadius: 10 },
        tabBarActiveTintColor: "#0373F3",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Frontpage}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }: any) => (
            <FoundationFix name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={LtinerPage}
        options={{
          headerShown: false,
          tabBarLabel: "Wallet",
          tabBarIcon: ({ color, size }: any) => (
            <IoniconsFix name="ios-briefcase-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Guide"
        component={QueryPage}
        options={{
          headerShown: false,
          tabBarLabel: "Guide",
          tabBarIcon: ({ color, size }: any) => (
            <FontAwesome5 name="safari" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={FrendPage}
        options={{
          headerShown: false,
          tabBarLabel: "Chart",
          tabBarIcon: ({ color, size }: any) => (
            <FontAwesome5 name="chart-line" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavTravel;
