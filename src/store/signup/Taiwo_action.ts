import { SignupPageActionTypes, ADD_NEW_SIGNUP_TO_USERSLIST, UsersList } from './Taiwo_types';

export function addNewSignupToUsersList (userslist: UsersList): SignupPageActionTypes {
    return {
        type: ADD_NEW_SIGNUP_TO_USERSLIST,
        payload: userslist
    }
}


