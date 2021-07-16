import React, {Component} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

class Buttons extends Component {
    render () {
        return(
            <View style = {styles.buttonsComponent}>
                <View style = {styles.leftSideButtons}>
                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            AC
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            DEL
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            %
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            9
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            8
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            7
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            6
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            5
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            4
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            3
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            2
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            1
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            H
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            0
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton}>
                        <Text style = {styles.buttonText}>
                            .
                        </Text>
                    </Pressable>

                </View>

                <View style = {styles.rightSideButtons}>
                    <Pressable style = {styles.rightSideButton}>
                        <Text style = {styles.buttonTextRight}>÷</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton}>
                        <Text style = {styles.buttonTextRight}>×</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton}>
                        <Text style = {styles.buttonTextRight}>−</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton}>
                        <Text style = {styles.buttonTextRight}>+</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton}>
                        <Text style = {styles.equalsButton}>=</Text>
                    </Pressable>
                </View>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    rightSideButtons: {
        borderWidth: 1,
        borderColor: 'skyblue',
        flex: 2
    },

    leftSideButton: {
        width: '33.33%',
        justifyContent: 'center',
        height: '20%',
    },

    buttonText: {
        fontSize: 30,
        textAlign: 'center',
    },

    buttonTextRight: {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'lightgrey',
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        paddingTop: 8,
        borderRadius: 40,
    },

    rightSideButton: {
        height: '20%',
        justifyContent: 'center'
    }
});


export default Buttons;