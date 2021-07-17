import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class Screen extends Component {
    render () {

        const {
            expression,
            result,
        } = this.props;

        return(
            <View style = {styles.screenComponent}>
                <Text style = {styles.expression}>{expression}</Text>
                <Text style = {styles.result}>{result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenComponent: {
        flex: 3,
        // borderWidth: 1,
        // borderColor: 'skyblue',
        backgroundColor: 'skyblue',
    },

    expression: {
        fontSize: 30,
        textAlign: 'right',
        padding: 10,
    },

    result: {
        fontSize: 20,
        textAlign: 'right',
        padding: 10,
    }
});


export default Screen;