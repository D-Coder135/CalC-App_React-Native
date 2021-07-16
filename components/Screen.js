import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Screen extends Component {
    render () {
        return(
            <View style = {styles.screenComponent}>
                <Text>Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenComponent: {
        flex: 3,
        borderWidth: 1,
        borderColor: 'skyblue'
    }
});


export default Screen;