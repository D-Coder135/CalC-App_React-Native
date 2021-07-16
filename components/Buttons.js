import React, {Component} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

class Buttons extends Component {
    render () {
        return(
            <View style = {styles.buttonsComponent}>
                <View style = {styles.leftSideButtons}>
                    <Pressable>
                        <Text>
                            AC
                        </Text>
                    </Pressable>
                </View>

                <View style = {styles.rightSideButtons}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonsComponent: {
        flex: 7,
        borderWidth: 1,
        borderColor: 'skyblue',
        flexDirection: 'row'
    },

    leftSideButtons: {
        borderWidth: 1,
        borderColor: 'skyblue',
        flex: 8
    },

    rightSideButtons: {
        borderWidth: 1,
        borderColor: 'skyblue',
        flex: 2
    }
});


export default Buttons;