import { StyleSheet, Text, View } from "react-native";
export const detailstyle = StyleSheet.create({
  imgdetail: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
  },
  playNone: {
    display: "none",
  },
  backdetail: {
    position: "absolute",
    top: "10%",
    left: "5%",
  },
  textdetail: {
    position: "absolute",
    width: "90%",
    bottom: "3%",
  },
  textPlan: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    alignItems: "center",
  },
  planWrite: {
    width: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    marginTop: 10,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    padding: "3%",
  },
  fomStart: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  btnBlack: {
    width: "45%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnWrite: {
    width: "45%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  fomItem: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  iconItem: {
    width: 50,
    height: 50,
    backgroundColor: "#FBEFF1",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  tablef10: {
    marginLeft: 5,
  },
  hightcenter: {
    alignItems: "center",
    justifyContent: "center",
  },
});
