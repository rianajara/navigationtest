import React from "react";
import { View, Button,Image, Text, StyleSheet } from "react-native";


const Welcome = ({ navigation }) => {
    return (
      <View style={styles.center}>
        <Image source= {require('../images/image.png')}
            style = {{width:"80%",height:"50%"}}
        />
         
        <Text style={{fontSize: 30,}}>
            Start checking in now!
        </Text>

        <Text style={{
                    fontSize:15,
                    textAlign:"center",
                    marginTop:5,
                    marginBottom:15,
                    opacity: 0.6
                }}>
            Welcome to the check-in app.
        </Text>
        
        <View style = {styles.LoginButtonContainer}>
            <Button
                title="Log in as host"
                color = "white"
                onPress={() => navigation.navigate('Login Host')}
            />
        </View>
        <View style = {styles.LoginButtonContainer}>
            <Button
                title="Log in as attendee"
                color = "white"
                onPress={() => navigation.navigate('Login Attendee')}
            />
        </View>
        <View style = {styles.RegisterButtonContainer}>
            <Button
                title="New User"
                color = "#686868"
                onPress={() => navigation.navigate('Register')}
            />
        </View>


      </View>
    );
  };
/*  

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("LoginHost")} // We added an onPress event which would navigate to the About screen
      />
    </View>
  );
};
*/
const styles = StyleSheet.create({
  center: {
    backgroundColor:"#fff7d5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  LoginButtonContainer: {
    elevation: 8,
    backgroundColor: "#0400B4",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 15
  },
  RegisterButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 50
  }
});

export default Welcome;