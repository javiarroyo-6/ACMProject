import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import Icon from '@expo/vector-icons/Ionicons';
import LoginScreen from './Screens/LoginScreen.js'
import HomeScreen from './Screens/HomeScreen.js';
import Profile from './Screens/Profile.js';
import Forum from './Screens/Forum.js';
import Living from './Screens/Living.js'


class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}



const HomeTabNavigator = createBottomTabNavigator({
    Living,
    Forum,
    Profile
},{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes
    [navigation.state.index];
    return {
      headerTitle:routeName
    }
  }
})

const HomeStackNavigator = createStackNavigator({
  HomeTabNavigator:HomeTabNavigator
},{
  defaultNavigationOptions:({navigation}) =>{
    return{
      headerLeft:(
        <Icon  
        style ={{ paddingLeft:10}}
        name="md-menu" 
        size={30} 
        onPress={()=> navigation.openDrawer()}  
        />
      )
    }
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:HomeStackNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Login:{ screen: LoginScreen },
  Home:{ screen: AppDrawerNavigator}

})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
