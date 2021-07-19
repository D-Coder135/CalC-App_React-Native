import React, {Component} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Screen from './Screen';
import Buttons from './Buttons';
import History from './History';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expression: '',
            result: '',
            actualExpression: '',
            isHistoryVisible: false,
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
            console.log(exception);
        }
    }

    clearAll = () => {
        this.setState({
            expression: '',
            result: '',
            actualExpression: '',
        });
    }

    deleteLastCharacter = () => {
        const {
            expression,
            actualExpression,
        } = this.state

        const slicedExpression = expression.slice(0, expression.length - 1);
        const slicedActualExpression = actualExpression.slice(0, expression.length - 1);
        this.setState({
            expression: slicedExpression,
        });

        if(slicedActualExpression === '') {
            this.setState({result: ''});
        }

        try {
            this.setState( {
                result: eval(slicedActualExpression).toString(),
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    equalsTo = () => {
        this.setState({
            expression: this.state.result,
            result: ''
        });
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
                <View style = {styles.historyWrapper}>
                    <History />
                </View>
                <Buttons 
                getExpressionValue = {this.getExpressionValue} 
                clearAll = {this.clearAll}
                deleteLastCharacter = {this.deleteLastCharacter}
                equalsTo = {this.equalsTo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calculatorComponent: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'skyblue'
    },

    historyWrapper: {
        position: 'absolute',
        top: 10,
        zIndex: 3,
        width: '100%',
        height: '100%',
        backgroundColor: '#00000061',
    }
});


export default Calculator;