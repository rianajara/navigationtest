import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";
import { Input } from 'react-native-elements';

import Icon from '@expo/vector-icons/MaterialIcons';

const HostSettings = () => {
  return (
    <View style={styles.center}>
      <View style={styles.inputContainer}>
        <Text style={{
            fontSize: 30,
            alignSelf: "center",
          }}>Host Account Settings
        </Text>
        <Text style={{
          fontSize:20,
          alignSelf:"center",
        }}>
          Change Organization email
        </Text>
        
				<Input
					placeholder='Host Email'
          secureTextEntry={false}
					leftIcon={
						<Icon
							name='mail'
							size={24}
							color='black'
							style={styles.icon}
						/>
					}
					// onChangeText={text => setEmail(text)}
					// value={email}
				/>

        <Button title="Save"/>

        <Text style={{
          fontSize:20,
          alignSelf:"center",
        }}>
          Change password email
        </Text>
        <Input
					placeholder='Enter password'
					secureTextEntry={true}
					leftIcon={
						<Icon
							name='lock'
							size={24}
							color='black'
							style={styles.icon}
						/>
					}
					// onChangeText={text => setPassword(text)}
				/>
        <Button title="Save"/>

        <Text style={{
          fontSize:20,
          alignSelf:"center",
        }}>
          Change organization name
        </Text>
        <Input
					placeholder='Enter organization name'
					secureTextEntry={false}
					leftIcon={
						<Icon
							name='group'
							size={24}
							color='black'
							style={styles.icon}
						/>
					}
					// onChangeText={text => setPassword(text)}
				/>
        <Button title="Save"/>

        <Button title="Log Out"/>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    backgroundColor:"#fff7d5",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
  },
  inputContainer: {
		width: '90%',
		
		justifyContent: 'space-evenly',
	},
});



export default HostSettings;