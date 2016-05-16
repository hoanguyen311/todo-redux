import TodoList from './component';
import {connect} from 'react-redux';
import actions from '~/actions';


const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        changeHandler() {
            dispatch(actions.toggleCompleteTodo(ownProps.id));
        },
        onSubmit(text) {
            dispatch(actions.editTodoText({
                id: ownProps.id,
                text
            }));
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(TodoList);
