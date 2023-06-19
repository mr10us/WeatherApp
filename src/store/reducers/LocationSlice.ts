import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ILocation {
  latitude: number;
  longtitude: number;
  isKnown?: Boolean;
  error?: String;
}

const initialState: ILocation = {
  latitude: 0,
  longtitude: 0,
  isKnown: false,
  error: '',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action: PayloadAction<ILocation>) {
      try {
        state.isKnown = false;
        state.latitude = action.payload.latitude;
        state.longtitude = action.payload.longtitude;
      } catch (err) {
        console.error('error #%d', err);
      }
    },
    setLocationSuccess(state) {
      try {
        if (state.latitude !== null && state.longtitude !== null)
          state.isKnown = true;
      } catch (err) {
        console.error('error #%d', err);
      }
    },
    setLocationError(state, action: PayloadAction<String>) {
      state.isKnown = false;
      state.error = action.payload;
    },
  },
});

export default locationSlice.reducer;
