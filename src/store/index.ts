import { combineReducers, createStore } from 'redux';
import { newsfeedReducer } from './newsfeed/newsfeed_reducer';

// Combines our reducers
const rootReducer = combineReducers( {
    newsfeed: newsfeedReducer
} );

export type RootState = ReturnType<typeof rootReducer>;

// Below is where we set up our store!
export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
}