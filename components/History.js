import React, {Component} from 'react';
import { Text, StyleSheet, View, Pressable } from 'react-native';

class History extends Component {
    render () {
        const {
            closeHistory,
            history,
        } = this.props;

        return (
            <View style = {styles.historyComponent}>
                <View style = {styles.historyContainer}>
                    <View style = {styles.historyHeader}></View>

                    <View style = {styles.historyContent}>
                        {
                        history.map((item, index) => (
                            <Text></Text>
                        ))
    }
                    </View>

                    <Pressable style = {styles.closeButton} onPress = {closeHistory}>
                        <Text style = {styles.closeButtonText}>Close</Text>
                    </Pressable>

                </View>

                <View style = {styles.disabledArea}>

                </View>
            </View>
        );
    }
}

export default History;

const styles = StyleSheet.create({
    historyComponent: {
        flex: 1,
        // position: 'absolute',
        // zIndex: 1,

    },

    historyContainer: {
        flex: 8,
        backgroundColor: 'skyblue',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    disabledArea: {
        flex: 2,
    },

    historyHeader: {
        flex: 1,
    },

    historyContent: {
        flex: 8,
    },

    closeButton: {
        flex: 1,
    },

    closeButtonText: {
        fontSize: 30,
        textAlign: 'center',
        height: '100%',
        textAlignVertical: 'center',
        borderTopWidth: 1,
    }
});