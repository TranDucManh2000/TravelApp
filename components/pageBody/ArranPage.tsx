import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesignFix } from "../common/SearchTravle";
import { commons } from "../pagestyles/CommonStyles";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import TabArran from "./TabArran";
import TabForm from "./TabForm";

const ArranPage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container90}
        showsVerticalScrollIndicator={false}
      >
        <View style={commons.flexRowBetten60}>
          <AntDesignFix
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={30}
            color="black"
          />
          <Text style={fontext.font16boll}>Add itinerary</Text>
        </View>
        <View style={{ minHeight: 500 }}>
          <TabArran></TabArran>
        </View>
        <TouchableOpacity
          style={styles.btnblue}
          onPress={() => navigation.navigate("TravePlanpage")}
        >
          <Text style={fontext.font16Write}>Next Step</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ArranPage;
