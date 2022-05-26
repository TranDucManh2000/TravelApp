import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import SearchTravle, { AntDesignFix } from "../common/SearchTravle";
import { dataDetalOne, dataDetalTow } from "../faceData/FacedataDetail";
import { commons } from "../pagestyles/CommonStyles";
import { styles } from "../pagestyles/Createstyles";
import { fontpagestyle } from "../pagestyles/FontPageStyle";
import { fontext } from "../pagestyles/FontStyles";
import { planstyles } from "../pagestyles/Plantstyle";
import { FontAwesomeFix } from "./DetailsPage";

const DetailMap = ({ navigation }: any) => {
  const MapViewFix: Function = MapView;
  const MarkerFix: Function = Marker;
  return (
    <View style={styles.container}>
      <MapViewFix
        style={styles.map100}
        initialRegion={{
          latitude: 21.0349739,
          longitude: 105.7634631,
          latitudeDelta: 0.0,
          longitudeDelta: 0.0,
        }}
      >
        <MarkerFix
          coordinate={{ latitude: 21.0349739, longitude: 105.7634631 }}
          title={"thieuga"}
          description={"description"}
        />
      </MapViewFix>
      <SafeAreaView style={planstyles.topabsolute}>
        <View style={planstyles.previuFiter}>
          <AntDesignFix name="arrowleft" size={30} color="black" />
        </View>
        <TextInput
          placeholder=" Search..."
          style={planstyles.mapInput}
        ></TextInput>
        <View style={commons.searchFiter}>
          <AntDesignFix name="filter" size={24} color="#fff" />
        </View>
      </SafeAreaView>
      <View style={planstyles.bottomabsolute}>
        <Text style={fontext.font24boll}>Location targeting</Text>
        <View style={fontpagestyle.fromtext}>
          <ScrollView
            style={fontpagestyle.lisitem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {dataDetalOne.map((vl, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("detailspage", { vl })}
              >
                <View style={fontpagestyle.vewslitew}>
                  <Image
                    style={fontpagestyle.imagefrom}
                    source={{
                      uri: vl.url,
                    }}
                  />

                  <View style={fontpagestyle.textimg}>
                    <View style={fontpagestyle.textindex}>
                      <Text style={fontpagestyle.textfont22}>{vl.name}</Text>
                      <View style={fontpagestyle.textstart}>
                        <Text style={fontpagestyle.textfont12}>
                          from ${vl.price}
                        </Text>
                        <Text style={fontpagestyle.textfont12}>
                          {vl.start}{" "}
                          <FontAwesomeFix
                            name="star"
                            size={12}
                            color="#F7B701"
                          />
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default DetailMap;
