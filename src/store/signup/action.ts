import { SignupPageActionTypes, ADD_NEW_SIGNUP_TO_USERSLIST, CHECK_USERSLIST_FOR_EXISTING_USERNAME, UsersList } from './types';

export function addNewSignupToUsersList (userslist: UsersList): SignupPageActionTypes {
    return {
        type: ADD_NEW_SIGNUP_TO_USERSLIST,
        payload: userslist
    }
}

export function checkUsersListForExistingUsername (id: number): SignupPageActionTypes {
    return{
        type: CHECK_USERSLIST_FOR_EXISTING_USERNAME,
        payload: id
    }
}