import { ActionEx, ItemActionTypes } from '../actions/item.actions';
export const initialState = [];
export function ItemReducer(state = initialState, action: ActionEx) {
    switch (action.type) {
        case ItemActionTypes.Add:
            console.log(state);
            return state.concat(action.payload);
        case ItemActionTypes.Remove:
            return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
        case ItemActionTypes.Edit:
            console.log(action.payload);
            let data = state;
            console.log(action.payload.id)
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == action.payload.id) {
                    data[i] = action.payload;
                    break;
                }
            }
            return data;
        default:
            return state;
    }
}