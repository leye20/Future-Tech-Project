import { combineReducers, createStore } from 'redux';
import { newsfeedReducer } from './newsfeed/newsfeed_reducer';
import { profileReducer } from './profile/kounandi_reducer';

const rootReducer = combineReducers( {
    newsfeed: newsfeedReducer,
    profile: profileReducer,
    
} );

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const store = createStore( rootReducer );
    return store;
}
