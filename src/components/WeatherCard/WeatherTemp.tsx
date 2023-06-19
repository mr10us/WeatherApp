import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface WeatherTempProps {
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
        {Math.round(temp)}&#176; <Text style={styles.weatherTempWeather}>{weather}</Text>
      </Text>
      <View style={styles.weatherTempBetween}>
        <Text>Max.temp.:{tempMax}</Text>
        <Text>Min.temp.:{tempMin}</Text>
      </View>
    </View>
  );
};
export default WeatherTemp;

const styles = StyleSheet.create({
  weatherTempContainer: {
    borderColor: 'black',
    borderWidth: 2,
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherTemp: {
    fontSize: 110,
    color: '#656565',
    borderColor: 'black',
    borderWidth: 2,
  },
  weatherTempBetween: {
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    borderColor: 'black',
    borderWidth: 2,
  },
  weatherTempWeather: {
    fontSize: 40,
    textAlignVertical: 'top'
  }
});
