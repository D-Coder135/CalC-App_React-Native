import React, {Component} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';

const buttonRipple = {
    color: 'grey',
    borderless: true,
}

class Buttons extends Component {
    render () {

        const {
            getExpressionValue,
            clearAll,
            deleteLastCharacter,
            equalsTo,
            openHistory,
        } = this.props;

        return(
            <View style = {styles.buttonsComponent}>
                <View style = {styles.leftSideButtons}>
                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {clearAll}>
                        <Text style = {styles.buttonText}>
                            AC
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {deleteLastCharacter}>
                        <Text style = {styles.buttonText}>
                            DEL
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('%')}}>
                        <Text style = {styles.buttonText}>
                            %
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('9')}}>
                        <Text style = {styles.buttonText}>
                            9
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('8')}}>
                        <Text style = {styles.buttonText}>
                            8
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('7')}}>
                        <Text style = {styles.buttonText}>
                            7
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('6')}}>
                        <Text style = {styles.buttonText}>
                            6
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('5')}}>
                        <Text style = {styles.buttonText}>
                            5
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('4')}}>
                        <Text style = {styles.buttonText}>
                            4
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('3')}}>
                        <Text style = {styles.buttonText}>
                            3
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('2')}}>
                        <Text style = {styles.buttonText}>
                            2
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('1')}}>
                        <Text style = {styles.buttonText}>
                            1
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {openHistory}>
                        <Text style = {styles.buttonText}>
                            H
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('0')}}>
                        <Text style = {styles.buttonText}>
                            0
                        </Text>
                    </Pressable>

                    <Pressable style = {styles.leftSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('.')}}>
                        <Text style = {styles.buttonText}>
                            .
                        </Text>
                    </Pressable>

                </View>

                <View style = {styles.rightSideButtons}>
                    <Pressable style = {styles.rightSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('÷')}}>
                        <Text style = {styles.buttonTextRight}>÷</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('×')}}>
                        <Text style = {styles.buttonTextRight}>×</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('−')}}>
                        <Text style = {styles.buttonTextRight}>−</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton} android_ripple = {buttonRipple} onPress = {() => {getExpressionValue('+')}}>
                        <Text style = {styles.buttonTextRight}>+</Text>
                    </Pressable>

                    <Pressable style = {styles.rightSideButton} android_ripple = {buttonRipple} onPress = {equalsTo}>
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
        // borderWidth: 1,
        // borderColor: 'skyblue',
        flexDirection: 'row'
    },

    leftSideButtons: {
        // borderWidth: 1,
        // borderColor: 'skyblue',
        flex: 8,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    rightSideButtons: {
        // borderWidth: 1,
        // borderColor: 'skyblue',
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

    equalsButton: {
        flex: 1,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        // backgroundColor: 'lightgrey',
        marginTop: 10,
        marginBottom: 10,
        height: 40,
        paddingTop: 8,
        borderRadius: 40,
        backgroundColor: 'skyblue'
    },

    rightSideButton: {
        height: '20%',
        justifyContent: 'center'
    }
});


export default Buttons;