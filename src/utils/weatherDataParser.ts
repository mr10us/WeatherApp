import {ICityWeather} from '../interfaces/ICityWeather';

const parseData = (data: any): ICityWeather => {
  return {
    cnt: data.cnt,
    list: data.list.map((item: any) => ({
      dt: item.dt,
      main: {
        temp: item.main.temp,
        feels_like: item.main.feels_like,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        humidity: item.main.humidity,
      },
      weather: {
        main: item.weather[0].main,
        description: item.weather[0].description,
        icon: item.weather[0].icon,
      },
      clouds: item.clouds,
      wind: item.wind,
      visibility: item.visibility,
      pop: item.pop,
      rain: item.rain,
      dt_txt: item.dt_txt,
    })),
    city: {
      name: data.city.name,
      country: data.city.country,
      sunrise: data.city.sunrise,
      sunset: data.city.sunset,
    },
    active: false,
  };
};

export default parseData;
