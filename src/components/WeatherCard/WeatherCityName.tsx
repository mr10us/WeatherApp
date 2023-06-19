import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PRIMARY_CL} from '../../styles';
import {FC} from 'react';

type CityName = {
  cityName: string | undefined
}

const WeatherCityName: FC<CityName> = ({cityName}) => {
  return (
    <View style={styles.weatherCityName}>
      <Icon name="location-arrow" size={20} style={styles.icon} />
      <Text style={styles.weatherCityText}>{cityName}</Text>
    </View>
  );
};

export default WeatherCityName;

const styles = StyleSheet.create({
  weatherCityName: {
    borderColor: 'green',
    borderWidth: 2,
    height: '10%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  weatherCityText: {
    ...PRIMARY_CL,
    fontSize: 25,
  },
  icon: {},
});
