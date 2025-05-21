/*import {combineReducers, createStore} from 'redux';
import taskReducer from './task.ts'

const store = createStore(combineReducers({
    task: taskReducer
  }));


export default store;
*/

import { configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import { fieldApi } from './field';
import taskReducer from './task';
import {picsApi} from './pics'
import gameReducer from './game';


//console.log(preloadedState);
export const createStoreWithData = (preloadedState: any) =>
  configureStore({
    reducer: combineReducers({
      game: gameReducer,
      task: taskReducer,
      picsApi: picsApi.reducer,
      fieldApi: fieldApi.reducer,
      
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(fieldApi.middleware, picsApi.middleware),
    preloadedState
  })


 
//export  type AppStore = ReturnType<typeof createStoreWithData>;
//export type AppState = ReturnType<AppStore['getState']>
//export type AppDispatch = AppStore['dispatch']


