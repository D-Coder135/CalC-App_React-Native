import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Screen extends Component {
    render () {
        return(
            <View style = {styles.screenComponent}>
                Screen
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenComponent: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'skyblue'
    }
});


export default Screen;