import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {ICityWeather} from '../interfaces/ICityWeather';

export const weatherAPI = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/forecast?appid=${process.env.API_KEY}&lang=RU`,
  }),
  endpoints: build => ({
    fetchWeatherByCity: build.query<ICityWeather, object>({
      /**
       * @param {object} cityName - Accepts cityName, and fetching days amount
       */

      query: ({cityName, cnt}: {cityName: string; cnt: string}) => ({
        url: `&q=${cityName}&cnt=${cnt}&units=metric`,
        transformResponse: (rawResult: {result: {weather: ICityWeather}}) => {
          return rawResult.result.weather;
        },
      }),
    }),

    /**
     * @param {object} Cords - Accepts cords, and fetching days amount
     */

    fetchWeatherByCords: build.query<ICityWeather, object>({
      query: ({lon, lat, cnt}: {lon: string; lat: string; cnt: string}) => ({
        url: `&lat=${lat}&lon=${lon}&cnt=${cnt}&units=metric`,
        transformResponse: (rawResult: {result: {weather: ICityWeather}}) => {
          return rawResult.result.weather;
        },
      }),
    }),
  }),
});

export const {useFetchWeatherByCityQuery, useFetchWeatherByCordsQuery} =
  weatherAPI;
