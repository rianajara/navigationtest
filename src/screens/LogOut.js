import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";


const LogOut = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>Are you sure you want to log out?</Text>
      <View style={styles.buttonContainer}>
          <Button
            title="Yes"
            color = "#686868"
          />
          <Button
            title="No"
            color = "#686868"
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
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
  }
});

export default LogOut;