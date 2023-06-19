export interface ICityWeather {
  cnt: number;
  list: [
    {
      main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
      };
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
}
