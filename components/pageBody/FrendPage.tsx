import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { commons } from "../pagestyles/CommonStyles";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { dataDetalOne } from "../faceData/FacedataDetail";
import { AntDesignFix } from "../common/SearchTravle";
import { FontAwesomeFix } from "./DetailsPage";

const FrendPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container90}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{ height: "100%", width: "100%", marginTop: 30 }}
        >
          <View style={styles.marginTopAndBotTom}>
            <Text style={fontext.font24boll}>Your partner</Text>
          </View>
          <View style={commons.hightItem}>
            <View style={styles.flexRowBetten}>
              <View style={styles.flexRowBetten}>
                <Image
                  style={styles.avataStyle}
                  source={{
                    uri: "https://s3-alpha-sig.figma.com/img/792e/8b78/8a2bcafaa77c85892cd33f121429dc6f?Expires=1653868800&Signature=ZJq~5B8HaAn1J5cNAk8yB6pdRkLX0ElD4eU~Qq2ANvHTPet-PGdQaeqqqGj6tQvivPe3MOkmKOcHNDPwuw2O27gcZKjg2Gx1sBDhN3EC4Q2uib1DbXNtQrktkaEaxaKE9ipj6P~mbOf7Sn0HVBqE3cV7EVYnXEaZQcmcNoSdN3297lm7nl9SgmloejIAWumWruxnHRu3hWS8O1LEDzEmeSUEnPcie2fZ~Qnpt6ayybcP01Hy6CvSWoeK8M952~UyhjfXluRydQFiY7rzqHoGUPkqFL9YEuP-WkEI4plQumvEmVdmvUCcqg5MN70I~oc56WkCeBIo5Wxgw2mak~g8mw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                  }}
                />
                <View style={styles.margin5}>
                  <Text style={fontext.font16boll}>Alanlove</Text>
                  <Text style={fontext.font16clor}>Travel Blogger</Text>
                </View>
              </View>
              <View style={styles.btnblueMinih35}>
                <Text style={fontext.font16Write}>Edit profile</Text>
              </View>
            </View>
            <View style={commons.hrStyle}></View>
          </View>
          {dataDetalOne.map((vl: any, index: any) => (
            <View style={commons.hightItem} key={index}>
              <View style={styles.flexRowBetten}>
                <View style={styles.flexRowBetten}>
                  <Image
                    style={styles.avataStyle}
                    source={{
                      uri: "https://s3-alpha-sig.figma.com/img/0c6e/eae0/f4053bc71f501cbd56c8cdbf42c60b55?Expires=1653868800&Signature=Ri1KLA~MaZ4M-PLx4nM4z0-5ucvTU-U~YlDA58pc3Z~61rGDMQ28SktRLX7s0IWlHfZAUL50P25~Yi3XhOEvbWDHVV2gZKtS8wxkr~BidAr5yiZMhtqq4IDk7CumetEfjNqfrMf3bR4u6AbPNY1F2TQpgjISyBSKKRRfiS8tltzhTIfvBWF~fU3f8OzYkHjJ1s68Y42eFuIUwQ4OjQLFETsfuLkbmSAOcsQUdI~XKyVdVEV9w8q77YJBtnw025oMUU0BF~YA-FFlZH8QX4vtBzT1iKx5n~DSWDYEM1PmVQuhYWlo17AZLqmluiFZqf89gl8w~nsdiqG-ZbDUcvCv5Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                    }}
                  />
                  <View style={styles.margin5}>
                    <Text style={fontext.font16boll}>Alanlove</Text>
                    <Text style={fontext.font16clor}>Travel Blogger</Text>
                  </View>
                </View>
                <View>
                  <AntDesignFix name="arrowright" size={30} color="#C0C0C0" />
                </View>
              </View>
              <View style={commons.hrStyle}></View>
            </View>
          ))}
          <View style={styles.marginTopAndBotTom}>
            <View style={styles.flexRow}>
              <FontAwesomeFix name="sign-out" size={34} color="#0373F3" />
              <Text style={fontext.font24bollBlue}>Log out</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FrendPage;
