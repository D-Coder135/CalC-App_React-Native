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
            actualExpression: '',
        }
    }

    getExpressionValue = (buttonPressed) => {
        const {
            expression,
            actualExpression,
            result,
        } = this.state;

        let newExpression = `${expression}${buttonPressed}`;
        this.setState({expression: newExpression});

        if (buttonPressed === '÷') {
            buttonPressed = '/';
        } else if (buttonPressed === '×') {
            buttonPressed = '*';
        } else if (buttonPressed === '−') {
            buttonPressed = '-';
        }

        let newActualExpression = `${actualExpression}${buttonPressed}`;
        this.setState({actualExpression: newActualExpression});

        try {
            this.setState( {
                result: eval(newActualExpression).toString(),
            });
        } catch (exception) {
            
        }
    }

    render () {

        const {
            expression,
            result,
        } = this.state

        return(
            <View style = {styles.calculatorComponent}>
                <StatusBar  barStyle = 'dark-content' backgroundColor = 'skyblue'/>
                <Screen 
                expression = {expression}
                result = {result}
                />
                <Buttons getExpressionValue = {this.getExpressionValue}/>
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