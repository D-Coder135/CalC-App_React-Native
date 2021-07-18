import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

class History extends Component {
    render () {
        return (
            <View style = {styles.historyComponent}>
                <View style = {styles.historyContainer}>
                    <View></View>

                    <View></View>

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
        flex: 8,
        backgroundColor: 'skyblue',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    disabledArea: {
        flex: 2,
    }
});