import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { AntDesignFix } from "../common/SearchTravle";
import { MaterialCommunityIconsFix } from "./Signin";
import { IoniconsFix } from "../common/NavTravel";

const SignUp = ({ navigation }: any) => {
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
          <Text style={fontext.font30boll}>Sign up free</Text>
        </View>
        <View style={styles.marginTopAndBotTom}>
          <Text style={fontext.font14colorAD}>Or continue with</Text>
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
        <View style={styles.marginTopAndBotTom}>
          <Text style={fontext.font14colorAD}>Or continue with</Text>
          <View style={styles.styleInput100}>
            <IoniconsFix name="lock-closed-outline" size={24} color="#C5C5C5" />
            <TextInput
              style={styles.tablef}
              placeholder=" Create a password"
            ></TextInput>
          </View>
        </View>
        <View style={styles.marginTopAndBotTom}>
          <Text style={fontext.font14colorAD}>Or continue with</Text>
          <View style={styles.styleInput100}>
            <IoniconsFix name="lock-closed-outline" size={24} color="#C5C5C5" />
            <TextInput
              style={styles.tablef}
              placeholder=" Repeat password"
            ></TextInput>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 25,
              backgroundColor: "#0373F3",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesignFix name="ellipsis1" size={20} color="#fff" />
          </View>
          <Text style={styles.margin5}>I have read the </Text>
          <Text style={fontext.font14colorBlue}>Login</Text>
        </View>
        <View
          onTouchStart={() => navigation.navigate("signin")}
          style={styles.btnblue}
        >
          <Text style={fontext.font16Write}>Continue</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
