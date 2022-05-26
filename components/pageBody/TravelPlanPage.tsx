import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { AntDesignFix } from "../common/SearchTravle";
import { commons } from "../pagestyles/CommonStyles";
import { styles } from "../pagestyles/Createstyles";
import { fontext } from "../pagestyles/FontStyles";
import { planstyles } from "../pagestyles/Plantstyle";
import { FontAwesomeFix } from "./DetailsPage";

const TravelPlanPage = ({ navigation }: any) => {
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
          <Text style={fontext.font16boll}>Travel plan</Text>
        </View>
        <View style={styles.marginTopAndBotTom}>
          <Text style={fontext.font16boll}>Hotel</Text>
        </View>
        <View>
          <Image
            style={commons.Imagestylemini}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/c34f/954a/48a79ecbe8d1227dc13f1d2649203b9e?Expires=1653868800&Signature=YxGPntGk-y1-VVtQEe~rsSCtEgf3Xv6TXbSZwK-pJxzqUqYYkt5432aY4IIVXIZk5~M8FwofbYLlPEz8ZKBCEsUqyzFgkn9ezULOYUnNMCICKCrmybdBfppMjzgwZHF~wFMVPVIfavmMbVioifQOKwkA-IzLtZjQD~1pktj2kyAkz4WE6oL5G45idc8kw4Vj0u5fwyjZ~rf2MmbnTFn5HNrzlfC78jYd2FKev2xAXAUFi-5GlYNVNMrgGyjEyzUu937dPeQ6Pwklnjs8Z1phgyIs8mTL7jwotrHW38HhLvlbKWvONcFXzN1r9oW57PzE3nK-0VO3zbMFRsMkDmbN7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }}
          />
          <View style={commons.bottom10Lef10absolute}>
            <Text style={fontext.font24bollWrite}>Nordic Cottage</Text>
            <View style={commons.formStart}>
              <FontAwesomeFix name="star" size={18} color="#F7B502" />
              <FontAwesomeFix name="star" size={18} color="#F7B502" />
              <FontAwesomeFix name="star" size={18} color="#F7B502" />
              <FontAwesomeFix name="star" size={18} color="#F7B502" />
              <FontAwesomeFix name="star" size={18} color="#F7B502" />
            </View>
          </View>
        </View>
        <Text style={fontext.font16boll}>Flights</Text>
        <View style={styles.marginTopAndBotTom}>
          <View style={styles.flexRowBettenw100}>
            <View style={planstyles.boxfigh}>
              <Image
                style={styles.avataStyle}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/e435/d850/9b94c49eea15b8bc21515f7fd6f7d169?Expires=1653868800&Signature=gMrFL-DokF2Trv1E5owYDM~20-WWCjcDznrT35NZtC30SDbpRuhNnuWJ1357waXbfTGu8mVX7CUFR4TbVf4iNvRXDz9c-9EURRS7ELyZkvNWMGe-JSYtQNlXOC-fH9KxKLZdg6~yTiB7fokPC3cvf56vJ-Wem~wYuXAh1Fqpt7dNdVcxfCGhDIqfyQUsf4-4Ah3mCGr1XzkC9s3Vqj~VyYcJD0MGvwcLxCDB-YPgz8QEFQ0BjZwi~AbS-UFjypdXTi4QMXPaakQW8L1pxIsjHQkZH99qLjmJmCrHSwkD2EpSuFEvnYriF5M1vMOUKCMvwS-GTKp6wGUzShpeEk8nHA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                }}
              />
              <Text style={fontext.font30boll}>CHN</Text>
              <Text style={fontext.font14colorAD}>21.03 6:00 AM</Text>
              <Text style={fontext.font16blue}>First Class</Text>
            </View>
            <AntDesignFix name="arrowright" size={24} color="black" />
            <View style={planstyles.boxfigh}>
              <Image
                style={styles.avataStyle}
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/407c/942f/f5f97ed1064a63ae3b63cbf1474ab573?Expires=1653868800&Signature=BSleBfqU5xhaYBO70JKY3a7GnASevWkOU4cte9eRAM3I4JRshPO1l6FvdebqxTgvL4QIJ45U4zeAAjP5yeBhq0Awy3BSAoBCHL9j~AvEuILZWG43n3fPDkUmzAi-K3yYh-qVnu5iD7LKLH53ejnno8w~IzcgeO~GRoPsh7rJ2-AtKK3y5L0Id2d2oguGFxMeIHU9qqEsk4LNtpCMIgzMxb-55JWRRurEB8uhydj~pa0He6~smuIWBEopSnQ0RlzVFsTLjU8st2sklY5O~8bDwhctbbvteIQgSdL~90AbXDgOAH3BtCUuQrA2pSK3YpKL2JyjTMkYboaN5jJBkdnqKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
                }}
              />
              <Text style={fontext.font30boll}>UK</Text>
              <Text style={fontext.font14colorAD}>21.03 18:00 AM</Text>
              <Text style={fontext.font16blue}>First Class</Text>
            </View>
          </View>
          <View style={styles.marginTopAndBotTom}>
            <Text style={fontext.font16boll}>Flights</Text>
            <View style={styles.flexRowBettenMarginTop20}>
              <Text>Hotel (5nigh)</Text>
              <Text style={fontext.font16blue}>$886</Text>
            </View>
            <View style={styles.flexRowBettenMarginTop20}>
              <Text>Hotel (5nigh)</Text>
              <Text style={fontext.font16blue}>$886</Text>
            </View>
            <View style={styles.flexRowBettenMarginTop20}>
              <Text>Hotel (5nigh)</Text>
              <Text style={fontext.font16blue}>$886</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnblue}
          onPress={() => navigation.navigate("sharingpage")}
        >
          <Text style={fontext.font16Write}>Determine the plan</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TravelPlanPage;
