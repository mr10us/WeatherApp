export interface IWeather {
  main: string;
  description: string;
  icon: string;
};


export interface IWind {
  speed: number;
  deg: number;
  gust: number
};


export interface ITemp {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};


export interface IRain {
  precipitation: number
};


export interface IClouds {
  cloudiness: number
}

export interface ICityWeather {
  cnt: number;
  list: [
    {
      dt: number
      main: ITemp;
      clouds: IClouds,
      wind: IWind,
      visibility: number,
      pop: number,  // вероятность осадков от 0 до 1 float.
      rain: IRain, // уровень осадков за 3 часа в мм
      weather: IWeather;
      dt_txt: string; // '2023-06-15 12:00:00'
    },
  ];
  city: {
    name: string; // 'Сумы'
    country: string; // 'UA'
    sunrise: number;
    sunset: number;
  };
  active: boolean;
}
