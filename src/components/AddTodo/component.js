import React from 'react';
import './style.less';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    inputChangeHandler(e) {
        this.setState({
            value: e.target.value
        });
    }
    submitHandler(e) {
        e.preventDefault();
        if (typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(this.state.value);
            this.setState({value: ''});
        }
    }
    render() {
        return (
            <form onSubmit={this.submitHandler.bind(this)}>
                <div className="input-group add-todo">
                  <input
                    onChange={this.inputChangeHandler.bind(this)}
                    ref="input"
                    type="text"
                    className="form-control"
                    placeholder="Add Todo"
                    value={this.state.value}
                    />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">Add !</button>
                  </span>
                </div>
            </form>

        );
    }
}

export default AddTodo;
