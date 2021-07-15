import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

class Buttons extends Component {
    render () {
        return(
            <View style = {styles.buttonsComponent}>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonsComponent: {
        flex: 7,
        borderWidth: 1,
        borderColor: 'skyblue'
    }
});


export default Buttons;