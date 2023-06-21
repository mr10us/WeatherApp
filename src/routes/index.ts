import Home from '../screens/Home';
import AddCityWeather from '../screens/AddCityWeather';
import {FC} from 'react';
import {ADD_CITY_WEATHER, HOME} from '../consts';

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
];
