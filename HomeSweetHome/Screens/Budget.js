import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    Image,
    Text
} from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import BudgetDate from '../Components/BudgetDate.js'






class Budget extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon 
            name="ios-cash" 
            style={{ color: tintColor, fontSize:30}} 
            />
        )
    }         
    


    render() {
        return (
            <View style={styles.container}>
               <BudgetDate />
               <View>
                   <Text>Budget Stuff Below</Text>
               </View>
            </View>
        );
    }
}
export default Budget;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});