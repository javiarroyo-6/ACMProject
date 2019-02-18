import React, { Component } from "react";
import { 
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    AlertIOS,
    Text,

} from "react-native";
import { Container, Header, Content, Button, Card, CardItem, Body } from 'native-base';
import Icon from '@expo/vector-icons/Ionicons';
import BudgetDate from '../Components/BudgetDate.js'


class Budget extends Component {
    constructor(){
        super()
        this.state = {
            text:'',
            budget:'0'
        }
        this.changeBudget = this.changeBudget.bind(this);
    }
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon 
            name="ios-cash" 
            style={{ color: tintColor, fontSize:30}} 
            />
        )
    }    
    
    changeBudget(value){
        const previousBudget = this.state.budget
        const newState = {
            budget: value
        }
        this.setState(newState);
    }

    prompt(){
        AlertIOS.prompt('Enter a Budget',null, [{ text:'Cancel',onPress:() =>
    console.log('Cancel Pressed'),style:'cancel'},
{ text: 'OK', onPress:(value) => this.changeBudget() }]);
    }
    


    render() {
        return (
            <View style={styles.container}>
               <BudgetDate />
               <View style={styles.container}>
                <Container>
                    <Content>
                        <Button rounded info style={styles.position}
                            onPress={() => AlertIOS.prompt('Enter a Budget', null, [{text: 'Cancel', 
                            onPress: () => console.log('Cancel'), }, {text: 'OK', onPress: (value) => this.changeBudget(value), }])}
                        >
                            <Text style={styles.text}> + </Text>
                        </Button>
                        <Card>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Budget: ${this.state.budget}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        Expenses:Groceries $50 {'\n'} Rent $900
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
               </View>
            </View>
        );
    }
}


export default Budget;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center'
    },
    text:{
        fontSize:20,
    },
    position:{
        bottom:-150,
        right:-175
    }
});