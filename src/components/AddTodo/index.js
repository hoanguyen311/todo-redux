import AddTodo from './component';
import { connect } from 'react-redux';
import actions from '~/actions';

const mapDispatchToProps = function(dispatch) {
    return {
        onSubmit(value) {
            dispatch(actions.addItem(value));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);
