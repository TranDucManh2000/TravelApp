import { Dimensions, StyleSheet, Text, View } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container90: {
    width: "90%",
    marginTop: 50,
  },
  logopage: {
    width: "100%",
    height: "100%",
    backgroundColor: "#68D6CA",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  startImg: {
    width: "90%",
    height: "35%",
    margin: "2%",
  },
  size28: {
    fontSize: 28,
    fontWeight: "bold",
    width: "80%",
    textAlign: "center",
  },
  size18blo: {
    fontSize: 18,
    color: "#B4B4B4",
    textAlign: "center",
    margin: "5%",
    width: "80%",
  },
  btnnex: {
    width: 70,
    height: 70,
    backgroundColor: "#0373F3",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  size14: {
    fontSize: 14,
    position: "absolute",
    bottom: "1%",
  },
  btnblue: {
    minWidth: "90%",
    backgroundColor: "#0373F3",
    height: 50,
    borderRadius: 50,
    margin: "3%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnblueMini: {
    minWidth: "30%",
    backgroundColor: "#0373F3",
    height: 50,
    borderRadius: 50,
    margin: "3%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnblueMinih35: {
    minWidth: "30%",
    backgroundColor: "#0373F3",
    height: 35,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnblueMini20: {
    minWidth: "30%",
    backgroundColor: "#0373F3",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  btnWriteMini20: {
    minWidth: "30%",
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0.5,
  },
  hightcenter: {
    alignItems: "center",
    justifyContent: "center",
  },
  flexStart: {
    justifyContent: "flex-end",
  },
  marginTopAndBotTom: {
    marginBottom: "5%",
    marginTop: "5%",
  },
  styleInput100: {
    width: "100%",
    borderWidth: 2,
    height: 50,
    borderRadius: 50,
    borderColor: "#E9E9E9",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  flexRowCenter: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  tabright: {
    marginRight: 10,
  },
  tablef: {
    marginLeft: 10,
  },
  margin5: {
    margin: 5,
  },
  hrCreate25: {
    height: 2,
    width: "25%",
    backgroundColor: "#E8E8E8",
    margin: 5,
  },
  flexRowBetten: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  flexRowBettenw100: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  lisAvata: {
    flexDirection: "row",
    right: "5%",
    justifyContent: "space-around",
  },
  avataStyle: {
    width: 45,
    height: 45,
    borderRadius: 45,
  },
  avataStylemini: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  avataStyleminilef: {
    width: 35,
    height: 35,
    borderRadius: 35,
    marginLeft: 20,
    position: "absolute",
  },
  map100: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "relative",
  },
  flexRowBettenMarginTop20: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
});
