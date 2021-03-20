import React from "react";
import { View, StyleSheet, Text, Image, Button} from "react-native";
import { Input } from 'react-native-elements';
import Icon from '@expo/vector-icons/AntDesign';


const MainHost = ({navigation}) => {
    const image = require('../images/image.png');
    return (
        <View style={styles.contentContainer}>
            
            <Text style={{
                    fontSize: 20,
                    alignSelf: "center",
                    marginTop:50
                    
                }}
                >Organization Host Main Menu</Text>
            
            <View style={styles.buttonContainer}>
                <Button style={styles.smallButton}  title="Check In Attendees" onPress = {()=>navigation.navigate('Check In')} />
                <Button style={styles.smallButton}  title="Create an Event" onPress ={()=>navigation.navigate('Create Event')} />
                <Button style={styles.smallButton}  title="View Events" onPress ={()=>navigation.navigate('View Events')}/>
            </View>
            
        </View>
        
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor:"#fff7d5",
        flex: 1,
        alignItems: 'center',
        justifyContent:'space-evenly'  
    },
    smallImage: {
        marginTop:60,
        width: 200,
        height: 200,
    },
    inputContainer: {
        width: '90%',
        marginTop: 50,
        justifyContent:'space-evenly',
        
    },
    buttonContainer: {
        justifyContent:'space-around',
        height: '30%',
    },
    smallButton: {
    },
    icon: {
        marginRight: 15
    }
})
export default MainHost;