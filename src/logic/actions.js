import { ADD_ITEM, REMOVE_ITEM, TOGGLE_ITEM, FILTER } from './constants';

export const addItem = content => {
  return { type: ADD_ITEM, content };
};

export const removeItem = id => {
    return { type: REMOVE_ITEM, id }
};

export const toggleComplete = id => {
    return { type: TOGGLE_ITEM, id }
};

export const filter = () => {
    return { type: FILTER }
};
