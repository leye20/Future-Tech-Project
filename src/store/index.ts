import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { sessionReducer } from "./session/reducers";
import { userReducer } from "./Users/reducers";

const rootReducer = combineReducers({
    session: sessionReducer,
    userlist: userReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware()
        )
    );

    return store;
}