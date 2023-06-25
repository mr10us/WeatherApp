import {View, StyleSheet} from 'react-native';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import {FC} from 'react';
import { ITemp } from '../../interfaces/ICityWeather';

type WeatherInfoData = {
  dt: number;
  temperature: ITemp;
  weather: string

};

const WeatherInfo: FC<WeatherInfoData> = ({
  dt,
  temperature,
  weather,
}) => {
  return (
    <View>
      <View>
        <WeatherIcon dt={dt} />
        <WeatherTemp
          temp={temperature.temp}
          tempMax={temperature.temp_max}
          tempMin={temperature.temp_min}
          weather={weather}
        />
        
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({});
