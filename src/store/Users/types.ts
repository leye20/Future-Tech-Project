export interface UserState {
    userlist: UserList[];
}

export interface UserList {
    id: number;
    username: string;
    password: string;
}

//actions Can be defined Out in this PartIcular filE like Dthis.
export const ADD_USERS_TO_SYSTEM = "ADD_USERS_TO_SYSTEM";

interface AddUserToSystem {
    type: typeof ADD_USERS_TO_SYSTEM,
    userlist: UserList
}

export type UserActionTypes = AddUserToSystem;