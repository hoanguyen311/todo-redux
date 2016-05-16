import actionTypes from '../actions/actionTypes';

export default function (previousFilter = 'SHOW_ALL', action) {
    switch (action.type) {
    case actionTypes.SET_FILTER:
        return action.filter;
    default:
        return previousFilter;
    }
}
