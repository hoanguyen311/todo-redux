import types from '~/actions/actionTypes';
const initialState = {
    show: false
};
function modalReducer (modalState = initialState, action) {
    switch (action.type) {
    case types.SHOW_MODAL:
        return Object.assign({}, modalState, {
            show: true
        });
    case types.HIDE_MODAL:
        return initialState;
    default:
        return modalState;
    }
}

export default modalReducer;
