import { UserList, ADD_USERS_TO_SYSTEM } from "./sijo_types";

export function AddUserToSystem(thisWasCopied: UserList) {
    return {
        type: ADD_USERS_TO_SYSTEM,
        userlist: thisWasCopied
    }
}