import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { commons } from "../pagestyles/CommonStyles";
import { AntDesign } from "@expo/vector-icons";
import { stepstyles } from "../pagestyles/StepStyles";
import StepIndicator from "react-native-step-indicator";
import { MaterialCommunityIconsFix } from "../singin/Signin";
import { customStyles, labels } from "../faceData/FaceData";

const LtinerPage = () => {
  const AntDesignFix: Function = AntDesign;
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container90}>
        <View style={styles.flexRowBetten}>
          <View>
            <Text style={fontext.font16clor}>Good monring</Text>
            <Text style={fontext.font30boll}>Hello,Alanlove</Text>
          </View>
          <View>
            <Image
              style={styles.avataStyle}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/0d19/a43c/e256ade2ec23a45ccd8e6d1aa595b9b1?Expires=1653264000&Signature=AbaBocIPaK5DInpTjiwcmxfpPJHnUzYr8wXxDvmISMCPeP~25neLk~QigVGET5OjHYh1CQCjecmpn7kgIlxmQJ39Hc0562~BLiFCHzyIdmciL2ePNKMUNNQbms5pS-4xQaaQRw3U9EevXnmZDL~3UEUBXlWSnrlsvoVpyj2Kmja~FWqemg1hpt4Kr376w61JT6LrAIYT6IT67ozW3RI9lh2OwtDmyQJCEp97I3etINZWKJsVO1RuY8Wmc5O330TxZcimiNo0yZDefFbYD3ccuWJ1WcP3fHNQOL~q3x6GdqTcGrdJJVNd176o6sUQJRatAR2MrYuLVYWBSsbxOwga4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              }}
            />
          </View>
        </View>
        <View style={styles.marginTopAndBotTom}>
          <Text style={fontext.font16boll}>Maldives Island</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 180,
            marginBottom: 20,
          }}
        >
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/93bc/1330/1a2ce637f592fd0da7c5000b722a2948?Expires=1653264000&Signature=X-h9uTW506u76xkLFRTSSh2XqXU~t4~KFuUwmXbz0b15Gpdiww6YNJIVXC2zTASzDcddHegsg4FAyEuk6f08e7IvZ3gzPzu2CiRtV896ip-y~fOmOJAJQQ5RhGH3uHPGLZLws4I1nG2MffNJXkyfhxt5cscjE1MZMxN22JHVyURHFq4hbULOyKf3~A14cjNNiQsyx0CWlpB1D2Qi9p7uuXjkWw7UzJgOaXVzVu9bvrz-PeIPgAZKfYSItf1rh-vpSyFkMVFCUpItzvBVRmY6ZuRZU8oOpuW0fxLGNhDu5EFDfVJzEzBLm43z6bhdMW2U3R1Sdp5fX65yQCPEpoaiCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 20,
            }}
          ></Image>
          <View style={commons.fomAbsoluteT10}>
            <View style={commons.containerRow}>
              <Text style={fontext.font16Write}>
                <AntDesignFix name="enviromento" size={16} color="#fff" />
                Beach Reef
              </Text>
              <View style={styles.lisAvata}>
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/0d19/a43c/e256ade2ec23a45ccd8e6d1aa595b9b1?Expires=1653264000&Signature=AbaBocIPaK5DInpTjiwcmxfpPJHnUzYr8wXxDvmISMCPeP~25neLk~QigVGET5OjHYh1CQCjecmpn7kgIlxmQJ39Hc0562~BLiFCHzyIdmciL2ePNKMUNNQbms5pS-4xQaaQRw3U9EevXnmZDL~3UEUBXlWSnrlsvoVpyj2Kmja~FWqemg1hpt4Kr376w61JT6LrAIYT6IT67ozW3RI9lh2OwtDmyQJCEp97I3etINZWKJsVO1RuY8Wmc5O330TxZcimiNo0yZDefFbYD3ccuWJ1WcP3fHNQOL~q3x6GdqTcGrdJJVNd176o6sUQJRatAR2MrYuLVYWBSsbxOwga4A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                  resizeMode="cover"
                  style={styles.avataStylemini}
                ></Image>
                <Image
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/792e/8b78/8a2bcafaa77c85892cd33f121429dc6f?Expires=1653264000&Signature=VfYy4rMJaTGXiw9SKngk9SAV5QC~xstkMDF5S1lv7QBeXIv~oVKLkMvTJwLg48iwm6Ppus7k6hoDheHV3ILZ58APNcFHPrrzUeZV7dQjDP~LfYmbM-XHpdCbmZtaCQTD~5yeAviT8S8wzKIKy9ngXa9RL98G8Goa8M1TbGxngps~rKnisJh7pO6nV90Ks6CyE-wOVG7NNeoisE6aTYCQfQSh1uv4Ea79ucar69uzTpsjWfrYMWFA7OGA~SOK6pKgkGELUcKVQ0p6Ns42XlUdJTspgB5epXJjV077bm8eCtREti4-0HJK9qGcV-idSq1lkajPcIzSagoNQM2QGYR~Nw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                  resizeMode="cover"
                  style={styles.avataStyleminilef}
                ></Image>
              </View>
            </View>
          </View>
          <View style={{ position: "absolute", bottom: "2%", right: "5%" }}>
            <View style={styles.btnblueMini}>
              <Text style={fontext.font16Write}>Maldives</Text>
            </View>
          </View>
        </View>
        <View style={stepstyles.container}>
          <View style={stepstyles.tabw100}>
            <View style={styles.marginTopAndBotTom}>
              <Text style={fontext.font16boll}>Schedule</Text>
            </View>
          </View>
          <View style={{ height: 3 * 100 }}>
            <StepIndicator
              customStyles={customStyles}
              stepCount={3}
              currentPosition={2}
              direction="vertical"
              labels={labels.map((item: any) => item.name)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LtinerPage;
