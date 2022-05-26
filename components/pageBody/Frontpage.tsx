import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import SearchTravle from "../common/SearchTravle";
import { fontpagestyle } from "../pagestyles/FontPageStyle";
import { FontAwesomeFix } from "./DetailsPage";
import { dataDetalOne, dataDetalTow } from "../faceData/FacedataDetail";

const Frontpage = ({ navigation }: any) => {
  return (
    <View style={fontpagestyle.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: "100%", width: "100%", marginTop: 50 }}
      >
        <View style={fontpagestyle.container}>
          <View style={fontpagestyle.fromtext}>
            <Text style={fontpagestyle.textfont16}>Find your next trip</Text>
            <Text style={fontpagestyle.texfon26}>Nordic scenery</Text>
          </View>
          <SearchTravle></SearchTravle>
          <View style={fontpagestyle.fromtext}>
            <Text style={fontpagestyle.texfon18}>Popular locations</Text>
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
          <View style={fontpagestyle.fromtext}>
            <Text style={fontpagestyle.texfon18}>Popular locations</Text>
            <ScrollView
              style={fontpagestyle.lisitem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {dataDetalTow.map((vl, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("detailspage", { vl })}
                >
                  <View style={fontpagestyle.vewsliteh}>
                    <Image
                      style={fontpagestyle.imagefrom}
                      source={{
                        uri: vl.url,
                      }}
                    />
                    <View style={fontpagestyle.textimg}>
                      <View style={fontpagestyle.textindexh}>
                        <Text style={fontpagestyle.textfont18}>{vl.name}</Text>
                        <View style={fontpagestyle.textstarth}>
                          <Text style={fontpagestyle.textfont12}>
                            from ${vl.price}
                          </Text>
                          <Text style={fontpagestyle.textfont12}>
                            {vl.location}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <View style={fontpagestyle.fromtext}>
            <Text style={fontpagestyle.texfon18}>Popular locations</Text>
            <ScrollView
              style={fontpagestyle.lisitem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {dataDetalTow.map((vl, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate("detailspage", { vl })}
                >
                  <View style={fontpagestyle.vewsliteh}>
                    <Image
                      style={fontpagestyle.imagefrom}
                      source={{
                        uri: vl.url,
                      }}
                    />
                    <View style={fontpagestyle.textimg}>
                      <View style={fontpagestyle.textindexh}>
                        <Text style={fontpagestyle.textfont18}>{vl.name}</Text>
                        <View style={fontpagestyle.textstarth}>
                          <Text style={fontpagestyle.textfont12}>
                            from ${vl.price}
                          </Text>
                          <Text style={fontpagestyle.textfont12}>
                            {vl.location}
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
      </ScrollView>
    </View>
  );
};

export default Frontpage;
