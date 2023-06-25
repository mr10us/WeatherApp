import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { PRIMARY_CL } from '../../styles';

type WeatherTempProps = {
  temp: number;
  tempMax: number;
  tempMin: number;
  weather: string;
}

const WeatherTemp: FC<WeatherTempProps> = ({
  temp,
  tempMax,
  tempMin,
  weather,
}) => {
  return (
    <View style={styles.weatherTempContainer}>
      <Text style={styles.weatherTemp}>
        {Math.floor(temp)}&#176; <Text style={styles.weatherTempWeather}>{weather}</Text>
      </Text>
      <View style={styles.weatherTempBetween}>
        <Text style={styles.minmaxTemp}>Max.:{Math.floor(tempMax)}</Text>
        <Text style={styles.minmaxTemp}>Min.:{Math.floor(tempMin)}</Text>
      </View>
    </View>
  );
};
export default WeatherTemp;

const styles = StyleSheet.create({
  weatherTempContainer: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherTemp: {
    fontSize: 110,
    ...PRIMARY_CL,
  },
  weatherTempBetween: {
    display: 'flex',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
  minmaxTemp: {
    ...PRIMARY_CL,
    fontSize: 24
  },
  weatherTempWeather: {
    fontSize: 40,
    textAlignVertical: 'top'
  }
});
