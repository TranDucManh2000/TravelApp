import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { AntDesignFix } from "../common/SearchTravle";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { planstyles } from "../pagestyles/Plantstyle";
import { MaterialCommunityIconsFix } from "../singin/Signin";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesomeFix } from "./DetailsPage";

export const FontAwesome5Fix: Function = FontAwesome5;

const SharingPage = ({ navigation }: any) => {
  const data = [
    {
      name: "a",
    },
    {
      name: "a",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container90}
        showsVerticalScrollIndicator={false}
      >
        <AntDesignFix
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={30}
          color="black"
        />
        <View style={styles.marginTopAndBotTom}>
          <Text style={fontext.font24boll}>Your social links</Text>
          <View style={styles.marginTopAndBotTom}>
            <Text style={fontext.font16clor}>
              Here you can post your travel blog and promote your travel videos
            </Text>
          </View>
        </View>
        <View style={planstyles.boxwshare100}>
          <View style={planstyles.boxwshare80}>
            <MaterialCommunityIconsFix
              name="facebook"
              size={40}
              color="#0163E0"
            />
            <View>
              <Text style={fontext.font16boll}>Facebook</Text>
              <Text style={fontext.font14colorAD}>
                Limited time paid promotion
              </Text>
            </View>
          </View>
        </View>
        <View style={planstyles.boxwshare100}>
          <View style={planstyles.boxwshare80}>
            <FontAwesome5Fix
              name="instagram-square"
              size={40}
              color="#BB0F23"
            />
            <View>
              <Text style={fontext.font16boll}>Instagram</Text>
              <Text style={fontext.font14colorAD}>
                Promote your blog for free
              </Text>
            </View>
          </View>
        </View>
        <View style={planstyles.boxwshare100}>
          <View style={planstyles.boxwshare80}>
            <FontAwesome5Fix name="twitter" size={40} color="#47ACDF" />
            <View>
              <Text style={fontext.font16boll}>Twitter</Text>
              <Text style={fontext.font14colorAD}>
                Limited time paid promotion
              </Text>
            </View>
          </View>
        </View>
        <View style={planstyles.boxwshare100}>
          <View style={planstyles.boxwshare80}>
            <FontAwesomeFix name="pinterest" size={40} color="#BB0F23" />
            <View>
              <Text style={fontext.font16boll}>Pinterest</Text>
              <Text style={fontext.font14colorAD}>
                Promote your blog for free
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.marginTopAndBotTom}>
          <Text>Add to see if your social links are correct</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SharingPage;
