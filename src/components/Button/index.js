import React from 'react';

class Button extends React.Component {
    render() {
        const buttonClass = this.props.active ? 'btn-primary' : 'btn-default';

        return (
            <button
                disabled={this.props.disabled}
                type="button"
                className={`btn ${buttonClass} ${this.props.modifierClass}`}
                onClick={this.props.onClick.bind(this)}
                >
                {this.props.children}
            </button>
        );
    }
}
Button.defaultProps = {
    disabled: false
};

export default Button;
