import { createSelector } from 'reselect';

const filterSelector = (state) => state.todosFilter;
const todosSelector = (state) => state.todos;



const getCompletedCount = createSelector(
    [ todosSelector ],
    function(todos) {
        return todos.filter(todo => todo.completed).length;
    }
)

const getVisibilityTodos = createSelector(
    [ filterSelector, todosSelector ],
    function (filter, todos) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_ACTIVE':
                return todos.filter((todo) => !todo.completed);
            case 'SHOW_COMPLETED':
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    }
);

export {
    getVisibilityTodos,
    getCompletedCount
};
