const INITIAL_STATE = {
    user: null
};
const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'SET_USER':
            return { user: payload }
        // case 'UPDATE SERVICE':
        //     return payload;
        // // return user.map((service) => (service._id === action.payload._id ? action.payload : service));
        // case 'DELETE SERVICE':
        //     return payload
        // case 'CREATE SERVICE':
        //     return payload
        default:
            return state
    }
}
export default userReducer;