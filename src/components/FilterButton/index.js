import Button from '~/components/Button';
import { connect } from 'react-redux';
import actions from '~/actions';

const mapStateToProps = function(state, ownProps) {
    return {
        active: state.todosFilter === ownProps.filterType
    };
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        onClick: () => {
            dispatch(actions.setFilter(ownProps.filterType));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);
