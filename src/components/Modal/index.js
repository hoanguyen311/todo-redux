import React from 'react';
import './style.less';

export default class extends React.Component {
    render() {
        return (
            <div className="modal-custom modal fade in" tabindex="-1" role="dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                            onClick={this.props.onOkClick}
                            className="btn btn-primary"
                            data-dismiss="modal"
                            >
                            Yep
                        </button>
                        <button
                            type="button"
                            onClick={this.props.onCloseClick}
                            className="btn btn-default"
                            data-dismiss="modal"
                            >
                            Close
                        </button>
                    </div>
                </div>
              </div>
            </div>

        );
    }
}
