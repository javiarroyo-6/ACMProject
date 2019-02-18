import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    Image
} from "react-native";
import Icon from '@expo/vector-icons/Ionicons';





class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon 
            name="ios-home" 
            style={{ color: tintColor, fontSize:30}} 
            />
        )
    }    


    

    render() {
        return (
            <View style={styles.container}>
               <Image style={{bottom: -10, width: 400, resizeMode: 'contain'}} source={require('../assets/home.png')} />
            </View>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});