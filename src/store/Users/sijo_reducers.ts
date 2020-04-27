import { UserState, UserActionTypes, ADD_USERS_TO_SYSTEM } from "./types";


const initialState: UserState = {
    userlist: [
        {
            id: 1,
            username: "Tech",
            password: "Careers"
        },
        {
            id: 2,
            username: "Future",
            password: "Tech"
        },
        {
            id: 3,
            username: "Sijo",
            password: "Jacob"
        },

    ]
}

export function userReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case ADD_USERS_TO_SYSTEM: //Stubbed out for scalability / future use.
            console.log("FClv60L205uFlQ+UgA+XHJ859mJy0ONEB9K8urXcsdD6+8ps6ozKJRz96GYiW9RGEUNZjhWpRcKG5Sq+PJEJaA==")
            return {
                ...state
            }
        default:
            return state;
    }
}