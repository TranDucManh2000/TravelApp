import { StyleSheet, Text, View } from "react-native";
export const commons = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#fff",
  },
  containerRow: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  navbottom: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "8%",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  itemNav: {
    alignItems: "center",
    justifyContent: "center",
  },
  textSize14: {
    fontSize: 14,
    color: "#BCBCBC",
  },
  textSize14blue: {
    fontSize: 14,
    color: "#0373F3",
  },
  initinput: {
    borderWidth: 1,
    width: "80%",
    borderRadius: 20,
    padding: 5,
    borderColor: "#E9E9E9",
  },
  initinput70: {
    borderWidth: 1,
    width: "70%",
    borderRadius: 20,
    padding: 5,
    borderColor: "#E9E9E9",
  },
  initinputauto: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    borderColor: "#E9E9E9",
    flexDirection: "row",
    justifyContent: "space-around",
    minWidth: "25%",
  },
  searchFiter: {
    width: 45,
    height: 45,
    backgroundColor: "#0373F3",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  fomAbsoluteT10: {
    position: "absolute",
    width: "100%",
    top: 10,
    alignItems: "center",
  },
  hrStyle: {
    width: "100%",
    height: 1,
    backgroundColor: "#F3F3F3",
    marginTop: 10,
  },
  hightItem: {
    height: 100,
    width: "100%",
    marginTop: 0,
    justifyContent: "center",
  },
  flexRowBetten60: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "60%",
  },
  Imagestylemini: {
    width: "100%",
    height: 100,
    marginBottom: 20,
    borderRadius: 5,
    position: "relative",
  },
  bottom10Lef10absolute: {
    bottom: 30,
    left: 10,
    position: "absolute",
  },
  formStart: {
    flexDirection: "row",
    width: 100,
    justifyContent: "space-around",
  },
});
