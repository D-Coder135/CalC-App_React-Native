import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Screen from './Screen';
import Buttons from './Buttons';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expression: '',
            result: '',
        }
    }

    getExpressionValue = (buttonPressed) => {

    }

    render () {
        return(
            <View style = {styles.calculatorComponent}>
                <StatusBar  barStyle = 'dark-content' backgroundColor = 'skyblue'/>
                <Screen />
                <Buttons />
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