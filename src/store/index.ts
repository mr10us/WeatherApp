import {combineReducers, configureStore} from '@reduxjs/toolkit';
import locationReducer from './reducers/LocationSlice';
import weatherReducer from './reducers/WeatherSlice';
import {weatherAPI} from '../services/weatherService';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

const rootReducer = combineReducers({
  // [weatherAPI.reducerPath]: weatherAPI.reducer,
  weatherReducer,
  locationReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleware =>
  //  getDefaultMiddleware().concat(weatherAPI.middleware),
});

// setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
