import React, { Component } from 'react';
import { Calendar, CalendarList, Agenda,calendarTheme } from 'react-native-calendars';
import { StyleSheet, Text, View,Button } from 'react-native';




class BudgetDate extends Component {
    render(){
        return(
            <View>
                <CalendarList
                    // Enable horizontal scrolling, default = false
                    horizontal={true}
                    // Enable paging on horizontal, default = false
                    pagingEnabled={false}
                    // Set custom calendarWidth.
                    calendarWidth={300}
                    />
                
            </View>
        )
    }
}


export default BudgetDate;