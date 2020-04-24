export interface UsersList{
    id: number,
    name: string
}
export interface SignupPageState {
    userslist:UsersList[]
}

export const ADD_NEW_SIGNUP_TO_USERSLIST = 'ADD_NEW_SIGNUP_TO_USERSLIST';
export const CHECK_USERSLIST_FOR_EXISTING_USERNAME = 'CHECK_USERSLIST_FOR_EXISTING_USERNAME';

interface AddNewSignupToUsersList {
    type: typeof ADD_NEW_SIGNUP_TO_USERSLIST,
    payload: UsersList
}

interface CheckUsersListForExistingUsername {
    type: typeof CHECK_USERSLIST_FOR_EXISTING_USERNAME,
    payload: number
}

export type SignupPageActionTypes = AddNewSignupToUsersList | CheckUsersListForExistingUsername;
