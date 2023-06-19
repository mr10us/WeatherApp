import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICityWeather} from '../../interfaces/ICityWeather';
import {RootState} from '..';

interface ICityState {
  cities: ICityWeather[];
  isLoaded: boolean;
  error: string;
}

const initialState: ICityState = {
  cities: [],
  isLoaded: false,
  error: '',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    weatherFetching(state) {
      state.isLoaded = false;
    },
    weatherFetchingSuccess(state, action: PayloadAction<ICityWeather>) {
      state.isLoaded = true;
      state.error = '';

      const existingIndex = state.cities.findIndex(
        city => city.city.name === action.payload.city.name,
      );
      if (existingIndex === -1) {
        state.cities.push(action.payload);
      } else {
        state.cities[existingIndex] =  {...state.cities[existingIndex], ...action.payload}
      };
    },
    weatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoaded = true;
      state.error = action.payload;
    },
  },
});

export default weatherSlice.reducer;

export const selectIcon = (state: RootState, arrayIndex: number) => {
  try {
    return state.weatherReducer.cities[arrayIndex].list[0].weather.icon;
  } catch (error) {
    return null;
  }
};
