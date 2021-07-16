import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Screen extends Component {
    render () {
        return(
            <View style = {styles.screenComponent}>
                <Text style = {styles.expression}>123456 * 456</Text>
                <Text>123456456</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenComponent: {
        flex: 3,
        borderWidth: 1,
        borderColor: 'skyblue',
        backgroundColor: 'skyblue',
    }
});


export default Screen;