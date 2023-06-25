import axios from 'axios';
import {AppDispatch} from '..';
import {ICityWeather} from '../../interfaces/ICityWeather';
import {weatherSlice} from './WeatherSlice';
import parseData from '../../utils/weatherDataParser';

export const fetchWeatherByCity =
  (cityName: string, cnt: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.weatherFetching());
      const response = await axios.get<ICityWeather>(
        `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&q=${cityName}&cnt=${cnt}&units=metric`,
      );

      const weather: ICityWeather = parseData(response.data);

      dispatch(weatherSlice.actions.weatherFetchingSuccess(weather));
    } catch (error: any) {
      dispatch(weatherSlice.actions.weatherFetchingError(error.message));
    }
  };

export const fetchWeatherByCords =
  ({cords, cnt}: ICords) => async (dispatch: AppDispatch) => {
    try {
      dispatch(weatherSlice.actions.weatherFetching());
      const response = await axios.get<ICityWeather>(
        `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&lat=${cords.lat}&lon=${cords.lon}&cnt=${cnt}&units=metric`,
      );

      const weather: ICityWeather = parseData(response.data);

      dispatch(weatherSlice.actions.weatherFetchingSuccess(weather));
    } catch (error: any) {
      dispatch(weatherSlice.actions.weatherFetchingError(error.message));
    }
  };
