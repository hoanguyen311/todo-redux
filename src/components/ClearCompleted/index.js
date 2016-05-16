import Button from '~/components/Button';
import { connect } from 'react-redux';
import actionCreators from '~/actions';
import { getCompletedCount } from '~/selectors';

const mapDispatchToProps = function(dispatch) {
    return {
        onClick: () => {
            dispatch(actionCreators.showModal());
        }
    }
}

const mapStateToProps = function(state, ownProps) {
    let completedCount = getCompletedCount(state);

    return {
        disabled: completedCount === 0,
        children: `${ownProps.children} (${completedCount})`
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
