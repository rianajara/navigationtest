import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainHostNavigator, MainNavigator, ContactStackNavigator } from "./StackNavigator";
import HostSettings from "../screens/HostSettings";


const Tab = createBottomTabNavigator();



const MainTabs = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={MainNavigator}/>
        </Tab.Navigator>
    );
}

const HostTabs = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={MainHostNavigator} />
      <Tab.Screen name = "Settings" component={HostSettings}/>
    </Tab.Navigator>
  );
};

export {HostTabs, MainTabs};