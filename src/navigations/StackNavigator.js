import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Welcome from "../screens/Welcome";
import LoginHost from "../screens/LoginHost";
import Register from "../screens/Register";
import LoginAttendee from "../screens/LoginAttendee";
import CreateEvent from "../screens/CreateEvent";
import MainHost from "../screens/MainHost";
import LogOut from "../screens/LogOut";
import ViewEvents from "../screens/ViewEvents";
import HostCheckIn from "../screens/HostCheckIn";



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#0400B4",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login Host" component={LoginHost} />
        <Stack.Screen name="Login Attendee" component={LoginAttendee} />
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Main Host" component={MainHostNavigator}/>     
      </Stack.Navigator>
    );
  }



const HostStack = createStackNavigator();

const hostOptionStyle = {
    headerStyle: {
      backgroundColor: "#0400B4",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const MainHostNavigator = () => {
  return (
    <HostStack.Navigator screenOptions={hostOptionStyle}>
        <HostStack.Screen name="Host Menu" component={MainHost}/>
        <HostStack.Screen name="Create Event" component={CreateEvent}/>
        <HostStack.Screen name="Check In" component={HostCheckIn}/>
        <HostStack.Screen name="View Events" component={ViewEvents}/>
    </HostStack.Navigator>
  );
}


const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.screen name ="Log Out" component ={LogOut}/>
        <Stack.Screen name ="Welcome" component = {Welcome} />
    </Stack.Navigator>
  );
}

export { MainNavigator,MainHostNavigator,ContactStackNavigator };