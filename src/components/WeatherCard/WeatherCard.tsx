import {Dimensions, StyleSheet, View} from 'react-native';
import WeatherInfo from './WeatherInfo';
import {FC} from 'react';
import WeatherCityName from './WeatherCityName';

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

const WIDTH = Dimensions.get('window').width;

const WeatherCard: FC<WeatherCardData> = ({
  cityName,
  weather,
  temperature,
  index,
}) => {
  return (
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
  );
};

export default WeatherCard;

const styles = StyleSheet.create({
  weatherCard: {
    width: WIDTH-15,
  },
});
