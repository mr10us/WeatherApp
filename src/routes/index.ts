import Home from '../screens/Home';
import AddCityWeather from '../screens/AddCityWeather';
import {FC} from 'react';
import {ADD_CITY_WEATHER, HOME, WEATHER_SCREEN} from '../consts';
import WeatherScreen from '../screens/WeatherScreen';

type Route = {
  name: string;
  component: FC;
};

export const routes: Route[] = [
  {
    name: HOME,
    component: Home,
  },
  {
    name: ADD_CITY_WEATHER,
    component: AddCityWeather,
  },
  {
    name: WEATHER_SCREEN,
    component: WeatherScreen,
  },
];
