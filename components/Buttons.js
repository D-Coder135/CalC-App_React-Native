import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Buttons extends Component {
    render () {
        return(
            <View style = {styles.buttonsComponent}>
                <View style = {styles.leftSideButtons}></View>

                <View style = {styles.rightSideButtons}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonsComponent: {
        flex: 7,
        borderWidth: 1,
        borderColor: 'skyblue'
    },

    leftSideButtons: {
        borderWidth: 1,
        borderColor: 'skyblue'
    },

    rightSideButtons: {

    }
});


export default Buttons;