import React from 'react';

export default class extends React.Component {
    render() {
        const buttonClass = this.props.active ? 'btn-primary' : 'btn-default';

        return (
            <button
                type="button"
                className={`btn ${buttonClass}`}
                onClick={this.props.onClick.bind(this)}
                >
                {this.props.children}
            </button>
        );
    }
}
