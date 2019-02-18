import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import Icon from '@expo/vector-icons/Ionicons';
import FAB from "../Components/Fab";
import List from '../ChoreComponents/List.js';
import Input from '../ChoreComponents/Input.js'


class Chores extends Component {
    constructor(){
        super()
        this.state = {
            chores:['What are your chores?'],

        }
    }
  

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon 
            name="ios-clipboard" 
            style={{ color: tintColor, fontSize:30}} 
            />
        )
    }   
    
    addChore = (text) => {
        const {chores} = this.state

        this.setState({
            chores:[text, ...chores],
        })
    }

    removeChore = (index) => {
        const {chores} = this.state 

        this.setState({
            chores:chores.filter((chore,i) => i !== index),
        })
    }



    render() {
        const {chores} = this.state
        return (
         <View>
            <Input 
                placeholder={"Type a chore"}
                onSubmitEditing={this.addChore}
            />
            <List 
                list={chores}
                onPressItem={this.removeChore}
            />
         </View>
        );
    }
}
export default Chores;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:360
    }
});