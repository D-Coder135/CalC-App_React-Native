import React, {Component} from 'react';
import { Text, StyleSheet, View } from 'react-native';

class History extends Component {
    render () {
        return (
            <View style = {styles.historyComponent}></View>
        );
    }
}

export default History;

const styles = StyleSheet.create({
    historyComponent: {
        flex: 1,
        // position: 'absolute',
        // zIndex: 1,

    }
});