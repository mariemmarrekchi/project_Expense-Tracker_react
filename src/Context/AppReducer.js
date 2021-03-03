export default (state, action) => {

    switch (action.type) {
        case 'DELETE_BOOK':
            return {
                ...state,
                list: state.list.filter(list => list.id !== action.payload)
            };
        case 'ADD_BOOK':
            return {
                ...state,
                list: [action.payload, ...state.list]
            };
        default:
            return state;
    }
}