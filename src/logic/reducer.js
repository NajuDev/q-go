import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, FILTER } from './constants';

export const initialState = {
  items: [
    { id: 1, content: 'Call mum', status: false },
    { id: 2, content: 'Buy cat food', status: false },
    { id: 3, content: 'Water the plants', status: false },
  ],
  showComplete: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const nextId =
        state.items.reduce((id, item) => Math.max(item.id, id), 0) + 1;
      const newItem = {
        id: nextId,
        content: action.content,
        status: false
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };
    case TOGGLE_ITEM:
        const toggleId = action.id;
        const newStateItems = state.items.slice();

        const changedObj = newStateItems.find((obj) => obj.id === toggleId);

        console.log(changedObj);

        changedObj.status = !changedObj.status;

        return {
            ...state,
            items: [...newStateItems],
        }
    case FILTER:
        console.log(state.showComplete);
        return {
            ...state,
            showComplete: !state.showComplete
        }
    case REMOVE_ITEM:
        const removeId = action.id;
        let item = state.items.find((obj) => {
            return obj.id === removeId;
        });

        console.log(removeId, state.items.indexOf(item), state.items[state.items.indexOf(item)], state.items.slice(0, state.items.indexOf(item)), state.items.slice(state.items.indexOf(item+1)));
        const newItems = (state.items.slice(0, state.items.indexOf(item)))
                            .concat( state.items.slice(state.items.indexOf(item+1)) );
        return {
            ...state,
            items: [...newItems],
        };
    default:
      return state;
  }
};

export default reducer;
