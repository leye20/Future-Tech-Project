import { ProfileActionTypes, ADD_ITEM_TO_PROFILE, REMOVE_ITEM_FROM_PROFILE, Item } from './kounandi_types';

export function removeItemFromProfile( id: string ): ProfileActionTypes {
  return {
    type: REMOVE_ITEM_FROM_PROFILE,
    payload: id // Will only accept type: number
  }
}

export function addItemToProfile ( item: Item ): ProfileActionTypes {
  return {
    type: ADD_ITEM_TO_PROFILE,
    payload: item // Will only accept type: Item
  }
}