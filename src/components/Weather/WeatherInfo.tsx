import {View, StyleSheet} from 'react-native';
import WeatherIcon from './WeatherIcon';
import WeatherTemp from './WeatherTemp';
import {FC} from 'react';

type WeatherInfoData = {
  index: number;
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: string;
};

const WeatherInfo: FC<WeatherInfoData> = ({
  index,
  temp,
  tempMax,
  tempMin,
  weather,
}) => {
  return (
    <View style={styles.weatherInfo}>
      <View>
        <WeatherIcon arrayIndex={index} />
        <WeatherTemp temp={temp} tempMax={tempMax} tempMin={tempMin} weather={weather} />
      </View>
    </View>
  );
};

export default WeatherInfo;

const styles = StyleSheet.create({
  weatherInfo: {
    height: '90%',
  },
});
