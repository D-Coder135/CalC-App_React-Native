import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Screen from './Screen';

class Calculator extends Component {
    render () {
        return(
            <View style = {styles.calculatorComponent}>
                Calculator
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calculatorComponent: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'skyblue'
    }
});


export default Calculator;