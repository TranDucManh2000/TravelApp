import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { styles } from "../pagestyles/Createstyles";
import { LocaleConfig } from "react-native-calendars";
import SearchTravle, { AntDesignFix } from "../common/SearchTravle";
import { fontext } from "../pagestyles/FontStyles";
import { commons } from "../pagestyles/CommonStyles";
import TabForm from "./TabForm";

const CanlidarPage = ({ navigation }: any) => {
  const [daytime, setdattime] = useState<any>({});
  const addDay = (day: any) => {
    console.log("---------------day", day);
    console.log("day", daytime);
    setdattime({
      ...daytime,
      [day]: {
        color: "#70d7c7",
        textColor: "white",
      },
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.container90}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={commons.flexRowBetten60}>
            <AntDesignFix
              onPress={() => navigation.goBack()}
              name="arrowleft"
              size={24}
              color="black"
            />
            <Text style={fontext.font16boll}>New Plan</Text>
          </View>
          <View style={styles.marginTopAndBotTom}>
            <Image
              style={commons.Imagestylemini}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/e92a/a0a8/d6a9e784292d55be02a4bd63de1d2747?Expires=1653868800&Signature=LD8JbG5pggQr4zeb7tmoA092MBPKOF8NPs3ZwQHWc1D7uA3EpPRSfrABEr9Ga9OzezxyWy-~oOvvjIxiG9xGJVEvR1XsravJwKQHpv5ehmAGrhTsEonPwnsmumBkGP3wtUf16NouMQ2vf4KEwybma~gC6F9gWHoCIgcNcbux8Z1ZCRPjAm-V6nKHZ10JO8tuO3wEmGIaAUinGhEiF~9UPf9SDwg9oDi4KZ8Wm3qZOfXmAafXBenI9kbdxwFN97lcJ7o0f0K7B3ynroXt4xVX-~OQZoJDpYZ65ymFHcKmcKOwAbGUnlERp~NwRpFBJtw0pY85vz2Tfe-k-zXUnYHXVA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              }}
            />
            <View style={commons.bottom10Lef10absolute}>
              <Text style={fontext.font14Write}>Nordic Cottage</Text>
              <Text style={fontext.font24bollWrite}>Nordic Cottage</Text>
            </View>
          </View>
          <View>
            <Text style={fontext.font16boll}>Select dates</Text>
          </View>
          <View style={{ width: "100%", minHeight: 350 }}>
            <Calendar
              onDayPress={(day) => addDay(day.dateString)}
              markingType={"period"}
              markedDates={daytime}
            />
          </View>
          <View>
            <Text style={fontext.font16boll}>Select dates</Text>
            <SearchTravle></SearchTravle>
            <View style={styles.flexRowBettenMarginTop20}>
              <Text>Send to your email</Text>
            </View>
            <TouchableOpacity
              style={styles.btnblue}
              onPress={() => navigation.navigate("arranpage")}
            >
              <Text style={fontext.font16Write}>Next Step</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CanlidarPage;
