import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';

import Input from './Input.js';
import { addTodo, setTodoText, updateTodo } from '../actions';

class TodoForm extends Component {

    onChangeText(text){
        this.props.dispatchSetTodoText(text);
    }

    onPress(){
        const { todo } = this.props;

        if(!todo.id)
            return this.props.dispatchAddTodo(this.props.todo.text);

        this.props.dispatchUpdateTodo(todo);

    }

    render() {
        const {text, id} = this.props.todo;
        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input onChangeText={text => this.onChangeText(text)} value={text} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={!id ? "add":"update"} onPress={()=> this.onPress()}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
    },
    inputContainer:{
        flex: 4,
    },
    buttonContainer:{
        flex: 1,
    }
});

const mapStateToPops = state => {
    return {
        todo: state.editingTodo
    };
};
export default connect(mapStateToPops, {
    dispatchAddTodo: addTodo,
    dispatchSetTodoText: setTodoText,
    dispatchUpdateTodo: updateTodo
})(TodoForm);