import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Screen extends Component {
    render () {
        return(
            <View style = {styles.screenComponent}>
                <Text style = {styles.expression}>123456 * 456</Text>
                <Tex style = {styles.result}>123456456</Tex>
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
    },

    expression: {

    },

    result: {
        
    }
});


export default Screen;