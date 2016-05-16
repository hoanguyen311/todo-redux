import types from './actionTypes';

function addItem(text) {
    return {
        type: types.ADD_ITEM,
        text
    };
}

function toggleCompleteTodo(index) {
    return {
        index,
        type: types.TOGGLE_COMPLETE_TODO
    };
}

function setFilter(filter) {
    return {
        filter,
        type: types.SET_FILTER
    };
}

function clearCompleted() {
    return {
        type: types.CLEAR_COMPLETED
    };
}
function showModal() {
    return {
        type: types.SHOW_MODAL
    };
}

function hideModal() {
    return {
        type: types.HIDE_MODAL
    };
}

function editTodoText({ text, id }) {
    return {
        type: types.EDIT_TODO_TEXT,
        text,
        index: id
    };
}
export default {
    addItem,
    toggleCompleteTodo,
    setFilter,
    clearCompleted,
    showModal,
    hideModal,
    editTodoText
};
