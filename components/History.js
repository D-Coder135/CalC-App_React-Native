import React, {Component} from 'react';
import { Text, StyleSheet, View, Pressable, ScrollView } from 'react-native';

class History extends Component {
    render () {
        const {
            closeHistory,
            history,
        } = this.props;

        return (
            <View style = {styles.historyComponent}>
                <View style = {styles.historyContainer}>
                    <View style = {styles.historyHeader}>
                    <Text style = {styles.headerButton}>History</Text>

                    <Pressable style = {styles.clearButton}>
                    <Text style = {styles.headerClearButton}>Clear</Text>
                    </Pressable>
                    </View>

                    <View style = {styles.historyContent}>
                        <ScrollView>{
                        history.map((item, index) => (
                            <Text style = {styles.historyComponentText}>
                                {item.expression} = {item.result}
                            </Text>
                            
                        ))
                       
    }
     </ScrollView>
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
        borderBottomWidth: 1,
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
    },

    historyComponentText: {
        fontSize: 30,
        padding: 20,
        borderBottomWidth:1
    },

    headerButton: {
        fontSize: 35,
        // height: '100%',
        // textAlignVertical: 'center',
    },

    headerClearButton: {
        textAlign: 'right',
        fontSize: 30,
        borderWidth: 1,
    },

    clearButton: {
        position: 'absolute',
        right: 10,
        top: 7,
    }
});