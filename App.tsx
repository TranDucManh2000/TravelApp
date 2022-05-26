import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoHawkeye from "./components/page/LogoHawkeye";
import * as React from "react";
import Startpage1 from "./components/page/Startpage1";
import Startpage2 from "./components/page/Startpage2";
import Startpage3 from "./components/page/Startpage3";
import NavTravel from "./components/common/NavTravel";
import DetailsPage from "./components/pageBody/DetailsPage";
import SignUp from "./components/singin/SignUp";
import Signin from "./components/singin/Signin";
import DetailMap from "./components/pageBody/DetailMap";
import CanlidarPage from "./components/pageBody/CanlidarPage";
import ArranPage from "./components/pageBody/ArranPage";
import TravelPlanPage from "./components/pageBody/TravelPlanPage";
import SharingPage from "./components/pageBody/SharingPage";

const Stack: any = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          name="Logo"
          component={LogoHawkeye}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="start1"
          component={Startpage1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="start2"
          component={Startpage2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="start3"
          component={Startpage3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="homepage"
          component={NavTravel}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detailspage"
          component={DetailsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="detailtmap"
          component={DetailMap}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="canlidalpage"
          component={CanlidarPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="arranpage"
          component={ArranPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravePlanpage"
          component={TravelPlanPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="sharingpage"
          component={SharingPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
