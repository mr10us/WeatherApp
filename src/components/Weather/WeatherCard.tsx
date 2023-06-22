import {StyleSheet, View} from 'react-native';
import WeatherInfo from './WeatherInfo';
import {FC} from 'react';
import WeatherCityName from './WeatherCityName';
import WeatherContainer from './WeatherContainer';

type WeatherCardData = {
  cityName: string;
  weather: string;
  temperature: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
  };
  index: number;
};

const WeatherCard: FC<WeatherCardData> = ({
  cityName,
  weather,
  temperature,
  index,
}) => {
  return (
    <WeatherContainer>
      <View style={styles.weatherCard}>
        <WeatherCityName cityName={cityName} />
        <WeatherInfo
          index={index}
          temp={temperature.temp}
          tempMax={temperature.temp_max}
          tempMin={temperature.temp_min}
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
