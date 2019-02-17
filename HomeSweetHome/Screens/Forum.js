import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

class Forum extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Forum</Text>
            </View>
        );
    }
}
export default Forum;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});