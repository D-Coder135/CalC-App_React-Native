import React, {Component} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

class Buttons extends Component {
    render () {
        return(
            <View style = {styles.buttonsComponent}>
                <View style = {styles.leftSideButtons}>
                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            AC
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            DEL
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            %
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            9
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            8
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            7
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            6
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            5
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            4
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            3
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            2
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            1
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            H
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            0
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text>
                            .
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
        flex: 8,
        flexDirection: 'row'
    },

    rightSideButtons: {
        borderWidth: 1,
        borderColor: 'skyblue',
        flex: 2
    },

    leftSideButton: {
        width: '33.33%',
    }
});


export default Buttons;