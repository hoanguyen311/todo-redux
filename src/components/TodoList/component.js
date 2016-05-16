import React from 'react';
import TodoItem from '../TodoItem';

class TodoList extends React.Component {
    renderItems() {
        if (this.props.todos) {
            return this.props.todos.map((item, index) => {
                return <TodoItem id={index} key={index} {...item} />;
            });
        }
        return false;
    }
    render() {

        if (!this.props.todos ||
            this.props.todos.length === 0) {
            return (
                <p className="alert alert-warning">Empty</p>
            );
        }

        return (
            <ul className="list-group">
                {this.renderItems()}
            </ul>
        );
    }
}

export default TodoList;
