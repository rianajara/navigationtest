import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { MainHostNavigator, ContactStackNavigator, HostNavigator } from "./src/navigations/StackNavigator";
import {HostTabs,MainTabs} from "./src/navigations/TabNavigator";




 const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
export default App

