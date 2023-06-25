import {StyleSheet, View} from 'react-native';
import WeatherInfo from './WeatherInfo';
import {FC} from 'react';
import WeatherCityName from './WeatherCityName';
import WeatherContainer from './WeatherContainer';
import { ITemp } from '../../interfaces/ICityWeather';

type WeatherCardData = {
  cityName: string;
  weather: string;
  temperature: ITemp;
  dt: number;
};

const WeatherCard: FC<WeatherCardData> = ({
  cityName,
  weather,
  temperature,
  dt,
}) => {

  return (
    <WeatherContainer dt={dt}>
      <View style={styles.weatherCard}>
        <WeatherCityName cityName={cityName} />
        <WeatherInfo
          dt={dt}
          temperature={temperature}
          weather={weather}
        />
      </View>
    </WeatherContainer>
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  weatherCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25
  },
});
