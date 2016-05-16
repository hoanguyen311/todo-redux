import Modal from '~/components/Modal';
import { connect } from 'react-redux';
import actionCreators from '~/actions';
import {getCompletedCount} from '~/selectors';
import React from 'react';

const mapDispatchToProps = function(dispatch) {
    return {
        onCloseClick: () => {
            dispatch(actionCreators.hideModal());
        },
        onOkClick: () => {
            dispatch(actionCreators.clearCompleted());
            dispatch(actionCreators.hideModal());
        }
    }
}
const mapStateToProps = function(state) {
    let completedCount = getCompletedCount(state);

    return Object.assign(
        {},
        state.modal,
        {
            children: (
                <p className='alert alert-warning'>Are you sure to delete {completedCount} item(s) ?</p>
            )

        }
    );
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);
