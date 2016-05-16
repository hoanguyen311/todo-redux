import types from '~/actions/actionTypes';

function todosReducer (previousTodos = [], action) {
    switch (action.type) {
    case types.ADD_ITEM:
        return previousTodos.concat({
            text: action.text,
            completed: false
        });
    case types.TOGGLE_COMPLETE_TODO:
        return previousTodos.map((todo, index) => {
            if (index === action.index) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        
    case types.EDIT_TODO_TEXT:
        return previousTodos.map((todo, index) => {
            if (index === action.index) {
                todo.text = action.text;
            }
            return todo;
        });
    case types.CLEAR_COMPLETED:
        return previousTodos.filter((todo) => {
            return !todo.completed;
        });
    default:
        return previousTodos;
    }
}

export default todosReducer;
