export interface Item {
  id: string,
  name: string
}

export interface ProfileState {
  items: Item[]
}

// Action "names" or types.
export const REMOVE_ITEM_FROM_PROFILE = 'REMOVE_ITEM_FROM_PROFILE';
export const ADD_ITEM_TO_PROFILE = 'ADD_ITEM_TO_PROFILE';

// Define action requirements.

interface RemoveItemFromProfile {
  type: typeof REMOVE_ITEM_FROM_PROFILE,
  payload: string // This will match our Item ID.
}

interface AddItemToProfile {
  type: typeof ADD_ITEM_TO_PROFILE,
  payload: Item // We need to pass a new Item that should be added to our store.
}

export type ProfileActionTypes = RemoveItemFromProfile | AddItemToProfile;
