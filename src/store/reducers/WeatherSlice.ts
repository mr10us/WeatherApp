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
        state.cities[existingIndex] = {
          ...state.cities[existingIndex],
          ...action.payload,
        };
      }
    },
    weatherFetchingError(state, action: PayloadAction<string>) {
      state.isLoaded = true;
      state.error = action.payload;
    },
    toggleActive(state, action: PayloadAction<number>) {
      const dtToToggle = action.payload;
      const index = state.cities.findIndex(
        item => item.list[0].dt === dtToToggle,
      );

      if (index !== -1) {
        state.cities[index].active = !state.cities[index].active;
      }
    },
  },
});

export default weatherSlice.reducer;

export const selectIcon = (state: RootState, dt: number) => {
  try {
    const index = state.weatherReducer.cities.findIndex(
      item => item.list[0].dt === dt,
    );
    if (index === -1) return null;

    return state.weatherReducer.cities[index].list[0].weather.icon;
  } catch (error) {
    return null;
  }
};

export const selectActive = (state: RootState) => {
  const activeIndex = state.weatherReducer.cities.findIndex(
    value => (value.active = true),
  );

  if (activeIndex == -1) throw new Error('No data found');
  return state.weatherReducer.cities[activeIndex];
};
