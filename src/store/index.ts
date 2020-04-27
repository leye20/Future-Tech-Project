import {combineReducers, createStore} from 'redux';
import {signupReducer} from './signup/Taiwo_reducer';

 const rootReducer = combineReducers({
  signup: signupReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
      return store;
  }


