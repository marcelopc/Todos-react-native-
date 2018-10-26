import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements'

const TodoListItem = ({todo, onPressTodo, onLongPressTodo}) => (
    <TouchableOpacity onPress={ onPressTodo } onLongPress={ onLongPressTodo }>
        <View style={ styles.line }>
            <Text style={ [styles.lineText, todo.done ? styles.lineThough : null] }>
                {
                    todo.text
                }
            </Text>
            {todo.done &&
                <View style={ styles.circle }>
                    <Icon name='done' color='#FFF'/>
                </View>
            }
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center',
    },

    lineText:{
        fontSize: 20,
        paddingLeft: 15,
    },
    lineThough: {
        textDecorationLine: 'line-through',
    },
    circle:{
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor:'#268c1a',
        justifyContent: "center",
        alignItems: 'center',
        marginLeft: 10
    }

});

export default TodoListItem;

