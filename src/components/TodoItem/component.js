import React from 'react';
import './style.less';

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editting: false
        };
    }
    renderCheckbox() {
        return (
            <div className="checkbox">
                <label htmlFor={`checkbox-todo-${this.props.id}`}>
                    <input
                        id={`checkbox-todo-${this.props.id}`}
                        type="checkbox"
                        onChange={this.props.changeHandler.bind(this)}
                        checked={ this.props.completed } />
                        {this.props.text}
                </label>
                &nbsp;
                <i
                    className="glyphicon glyphicon-pencil"
                    onClick={this.switchToEdit.bind(this)}
                    />
            </div>
        );
    }
    renderEditForm() {
        return (
            <input
                className="form-control"
                type="text"
                onKeyUp={this.onSubmitEdit.bind(this)}
                defaultValue={this.props.text}
                ref="input"
                />
        );
    }
    render() {
        return (
            <li className={`list-group-item ${this.props.completed ? 'list-group-item_active':'' }`}>
                {this.state.editting ? this.renderEditForm() : this.renderCheckbox()}
            </li>
        );
    }

    switchToEdit() {
        this.setState({
            editting: true
        });
    }

    onSubmitEdit(e) {
        this.refs.input.focus();
        if (e.keyCode === 27) {
            this.setState({
                editting: false
            });
            return false;
        }

        if (e.keyCode === 13 &&
            typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(
                this.refs.input.value
            );
            this.setState({
                editting: false
            });
        }
    }
}

export default TodoListItem;
