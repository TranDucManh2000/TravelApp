import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesignFix } from "../common/SearchTravle";

export const MaterialCommunityIconsFix: Function = MaterialCommunityIcons;

const Signin = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.container90}>
        <View style={styles.flexStart}>
          <AntDesignFix
            style={{ marginBottom: 20 }}
            onPress={() => navigation.goBack()}
            name="arrowleft"
            size={30}
          />
          <Text style={fontext.font30boll}>Sign in</Text>
        </View>
        <View style={styles.marginTopAndBotTom}>
          <View style={styles.styleInput100}>
            <MaterialCommunityIconsFix
              name="email-outline"
              size={24}
              color="#C5C5C5"
            />
            <TextInput
              style={styles.tablef}
              placeholder=" Enter e-mail address"
            ></TextInput>
          </View>
        </View>
        <View style={styles.flexRowCenter}>
          <View style={styles.hrCreate25}></View>
          <Text>Or continue with</Text>
          <View style={styles.hrCreate25}></View>
        </View>
        <View
          onTouchStart={() => navigation.navigate("homepage")}
          style={styles.btnblue}
        >
          <AntDesignFix
            style={styles.margin5}
            name="google"
            size={24}
            color="#fff"
          />
          <Text style={fontext.font16Write}>Continue with Google</Text>
        </View>
      </View>
    </View>
  );
};

export default Signin;
