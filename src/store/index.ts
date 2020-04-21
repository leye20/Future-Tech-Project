import { combineReducers, createStore } from 'redux';
import { newsfeedReducer } from './newsfeed/reducer';

const rootReducer = combineReducers( {
    newsfeed: newsfeedReducer
} );

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
}