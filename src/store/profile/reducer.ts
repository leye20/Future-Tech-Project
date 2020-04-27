import { ProfileState, REMOVE_ITEM_FROM_PROFILE, ADD_ITEM_TO_PROFILE, ProfileActionTypes } from './types';

// Set up a default or "initial" state for our app.
const initialState:ProfileState = {
  items: [
    {
      id: "bob",
      name: 'Socks'
    },
    {
      id: "kounandi",
      name: 'Pants'
    },
    {
      id: "john",
      name: 'Shoes'
    }
  ]
}

// Now to set up our reducer / functionality!
export function profileReducer ( state = initialState, action: ProfileActionTypes ) {
  switch ( action.type ) {
    case REMOVE_ITEM_FROM_PROFILE:
      return {
        ...state,
        // Filter through, and return the array WITHOUT the matching ID.
        items: state.items.filter( item => item.id === action.payload )
      }
    case ADD_ITEM_TO_PROFILE:
      return {
        ...state,
        // Add one new item onto the end of our array!
        items: [ ...state.items, action.payload ]
      }
    default:
      return state;
  }
}
