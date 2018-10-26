import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import TodoListitem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

const TodoList = ({ todos, dispatchTogleTodo, dispatchSetEditingTodo }) => (
    <View>
        {todos.map(todo =>
            <TodoListitem
                key={todo.id}
                todo={todo}
                onPressTodo={() => dispatchTogleTodo(todo.id)}
                onLongPressTodo={() => dispatchSetEditingTodo(todo)}
            />
            )
        }
    </View>
);

const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
}

export default connect(
    mapStateToProps,
    { 
        dispatchTogleTodo: toggleTodo,
        dispatchSetEditingTodo: setEditingTodo
    }
)(TodoList);