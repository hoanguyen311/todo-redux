import TodoList from './component';
import {connect} from 'react-redux';
import { getVisibilityTodos } from '~/selectors';

const mapStateToProps = function(state) {
    return {
        todos: getVisibilityTodos(state)
    };
}

export default connect(
    mapStateToProps
)(TodoList);
