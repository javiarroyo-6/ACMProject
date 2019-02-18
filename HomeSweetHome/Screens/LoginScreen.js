import React, { Component } from 'react'
import {
 AppRegistry,
 StyleSheet,
 TouchableHighlight,
 Text,
 View,
 Button,
 Image
} from 'react-native'


class LoginScreen extends Component {
   render() {
       return (
           <View style={styles.container}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                <Image style={{bottom: -10, width: 200, resizeMode: 'contain'}} source={require('../assets/everything1.png')} />
                </TouchableHighlight>
           </View>
       );
   }
}
export default LoginScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center'
   }
});





















// import React, { Component } from "react";
// import { 
//     View,
//     Text,
//     StyleSheet,
//     Image
// } from "react-native";
// import { Button } from 'native-base';


// // class LoginScreen extends Component {
// //     render() {
// //         return (
// //             <View style={styles.container}>
// //                 <Button block 
// //                     style={{
// //                         position: 'absolute',
// //                         bottom:100,
// //                         left:130,
// //                         paddingHorizontal:50,
// //                         color:"lightblue"
// //                         }}
// //                     onPress={() => this.props.navigation.navigate('Home')}
// //                 >
// //                     <Text>Login</Text>
// //                 </Button>
// //             </View>
// //         );
// //     }
// // }
// export default LoginScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     image: {
//         flex: 1,
//         width: null,
//         height: null,
//         resizeMode: 'contain'
//     }
// });