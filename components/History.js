import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

class History extends Component {
    render () {
        return (
            <View style = {styles.historyComponent}>
                <View style = {styles.historyContainer}>

                </View>

                <View style = {styles.disabledArea}>

                </View>
            </View>
        );
    }
}

export default History;

const styles = StyleSheet.create({
    historyComponent: {
        flex: 1,
        // position: 'absolute',
        // zIndex: 1,

    },

    historyContainer: {
        flex: 9,
        backgroundColor: 'skyblue'
    },

    disabledArea: {
        
    }
});