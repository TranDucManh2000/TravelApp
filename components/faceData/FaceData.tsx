import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { fontext } from "../pagestyles/FontStyles";
import { MaterialCommunityIconsFix } from "../singin/Signin";
export const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: "#0373F3",
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: "#0373F3",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#0373F3",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#0373F3",
  stepIndicatorUnFinishedColor: "#ffffff",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: "#aaaaaa",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#999999",
  labelSize: 13,
  currentStepLabelColor: "#aaaaaa",
};

export const labels = [
  {
    name: (
      <View
        style={{
          width: 300,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={fontext.font16boll}>Maldives</Text>
          <Text style={fontext.font16clor}>Save the Turtles</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={fontext.font16boll}>12:30</Text>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              padding: 10,
              margin: 5,
            }}
          >
            <MaterialCommunityIconsFix
              name="weather-lightning-rainy"
              size={20}
              color="#0373F3"
            />
          </View>
        </View>
      </View>
    ),
  },
  {
    name: (
      <View
        style={{
          width: 300,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={fontext.font16boll}>Maldives</Text>
          <Text style={fontext.font16clor}>Save the Turtles</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={fontext.font16boll}>15:30</Text>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              padding: 10,
              margin: 5,
            }}
          >
            <MaterialCommunityIconsFix
              name="weather-lightning-rainy"
              size={20}
              color="#0373F3"
            />
          </View>
        </View>
      </View>
    ),
  },
  {
    name: (
      <View
        style={{
          width: 300,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={fontext.font16boll}>Maldives</Text>
          <Text style={fontext.font16clor}>Save the Turtles</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={fontext.font16boll}>17:30</Text>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 40,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              padding: 10,
              margin: 5,
            }}
          >
            <MaterialCommunityIconsFix
              name="weather-lightning-rainy"
              size={20}
              color="#0373F3"
            />
          </View>
        </View>
      </View>
    ),
  },
];
