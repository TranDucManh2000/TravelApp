import React from "react";
import { TextInput, View } from "react-native";
import { commons } from "../pagestyles/CommonStyles";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export const AntDesignFix: Function = AntDesign;

const SearchTravle = () => {
  return (
    <SafeAreaView style={commons.containerRow}>
      <TextInput placeholder=" Search..." style={commons.initinput}></TextInput>
      <View style={commons.searchFiter}>
        <AntDesignFix name="filter" size={24} color="#fff" />
      </View>
    </SafeAreaView>
  );
};

export default SearchTravle;
