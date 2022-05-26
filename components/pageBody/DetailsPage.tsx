import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { detailstyle } from "../pagestyles/DetaiStyle";
import { FontAwesome } from "@expo/vector-icons";
import { fontext } from "../pagestyles/FontStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesignFix } from "../common/SearchTravle";

export const FontAwesomeFix: Function = FontAwesome;
export const MaterialIconsFix: Function = MaterialIcons;
const DetailsPage = ({ navigation, route }: any) => {
  const [viewdetail, setviewdetail] = useState(true);
  return (
    <View style={styles.container}>
      <View
        onTouchStart={() => setviewdetail(true)}
        style={detailstyle.imgdetail}
      >
        <Image
          style={detailstyle.imgdetail}
          source={{
            uri: route.params.vl.url,
          }}
          // resizeMode="contain"
        />
      </View>
      <View style={detailstyle.backdetail}>
        <AntDesignFix
          onPress={() => navigation.goBack()}
          name="arrowleft"
          size={30}
          color="#fff"
        />
      </View>
      <View
        style={
          viewdetail == true ? detailstyle.textdetail : detailstyle.playNone
        }
      >
        <Text style={fontext.font42Write}>{route.params.vl.name}</Text>
        <Text style={fontext.font16Write}>{route.params.vl.demo}</Text>
        <View style={detailstyle.fomStart}>
          <Text style={fontext.font14Write}>
            <FontAwesomeFix name="star" size={14} color="#F7B502" />
            <FontAwesomeFix name="star" size={14} color="#F7B502" />
            <FontAwesomeFix name="star" size={14} color="#F7B502" />
            <FontAwesomeFix name="star" size={14} color="#F7B502" />
            <FontAwesomeFix name="star" size={14} color="#F7B502" />
            &nbsp; {route.params.vl.start} ({route.params.vl.reviews} reviews)
          </Text>
          <Text style={fontext.font14Write}>See reviews</Text>
        </View>
        <View style={detailstyle.fomStart}>
          <TouchableOpacity
            style={detailstyle.btnBlack}
            onPress={() => setviewdetail(false)}
          >
            <Text style={fontext.font14Write}>Enter the plan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={detailstyle.btnWrite}
            onPress={() => navigation.navigate("detailtmap")}
          >
            <Text style={fontext.font14}>View other</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={
          viewdetail == false ? detailstyle.textPlan : detailstyle.playNone
        }
      >
        <Text style={fontext.font42Write}>{route.params.vl.name}</Text>
        <View style={detailstyle.planWrite}>
          <Text style={fontext.font16boll}>About Bail</Text>
          <Text style={fontext.font16clor}>{route.params.vl.demo}</Text>
          <View style={detailstyle.fomStart}>
            <Text style={fontext.font14}>
              <FontAwesomeFix name="star" size={14} color="#F7B502" />
              <FontAwesomeFix name="star" size={14} color="#F7B502" />
              <FontAwesomeFix name="star" size={14} color="#F7B502" />
              <FontAwesomeFix name="star" size={14} color="#F7B502" />
              <FontAwesomeFix name="star" size={14} color="#F7B502" />
              &nbsp; {route.params.vl.start} ({route.params.vl.reviews} reviews)
            </Text>
            <Text style={fontext.font14}>See reviews</Text>
          </View>
          <Text style={fontext.font16boll}>Pricing</Text>
          <View style={detailstyle.fomItem}>
            <View style={detailstyle.fomItem}>
              <View style={detailstyle.iconItem}>
                <MaterialIconsFix
                  name="flight-takeoff"
                  size={24}
                  color="#FF647C"
                />
              </View>
              <View style={detailstyle.tablef10}>
                <Text style={fontext.font16boll}>Flights</Text>
                <Text style={fontext.font16clor}>from $199</Text>
              </View>
            </View>
            <View style={detailstyle.hightcenter}>
              <AntDesignFix name="arrowright" size={24} color="#B7B7B7" />
            </View>
          </View>
          <View style={detailstyle.fomItem}>
            <View style={detailstyle.fomItem}>
              <View style={detailstyle.iconItem}>
                <MaterialIconsFix
                  name="flight-takeoff"
                  size={24}
                  color="#FF647C"
                />
              </View>
              <View style={detailstyle.tablef10}>
                <Text style={fontext.font16boll}>Hotels</Text>
                <Text style={fontext.font16clor}>from $199/ night</Text>
              </View>
            </View>
            <View style={detailstyle.hightcenter}>
              <AntDesignFix name="arrowright" size={24} color="#B7B7B7" />
            </View>
          </View>
          <View style={detailstyle.hightcenter}>
            <View
              style={styles.btnblue}
              onTouchStart={() => navigation.navigate("canlidalpage")}
            >
              <Text style={fontext.font16Write}>Plan trip</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsPage;
