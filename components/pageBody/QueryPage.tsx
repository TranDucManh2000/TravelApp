import React from "react";
import { ScrollView, Text, View } from "react-native";
import NavTravel from "../common/NavTravel";
import { AntDesignFix } from "../common/SearchTravle";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { MaterialCommunityIconsFix } from "../singin/Signin";
import TabForm from "./TabForm";
const QueryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container90}>
        <ScrollView style={{ width: "100%", height: "100%" }}>
          <View style={styles.flexRowBetten}>
            <AntDesignFix name="arrowleft" size={24} color="black" />
            <Text style={fontext.font24boll}>Itinerary Form</Text>
            <MaterialCommunityIconsFix
              name="line-scan"
              size={24}
              color="black"
            />
          </View>
          <View style={styles.flexRowBettenMarginTop20}>
            <View style={styles.btnblueMini20}>
              <Text style={fontext.font16Write}>Island</Text>
            </View>
            <View style={styles.btnWriteMini20}>
              <Text>Beach</Text>
            </View>
            <View style={styles.btnWriteMini20}>
              <Text>Resort</Text>
            </View>
          </View>
          <View style={{ minHeight: 500 }}>
            <TabForm valuetab={"query"}></TabForm>
          </View>
          <View style={styles.btnblue}>
            <Text style={fontext.font16Write}>View specific itinerary</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default QueryPage;
