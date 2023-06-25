import { StyleSheet, Text, View } from 'react-native'
import { IRain } from '../../interfaces/ICityWeather';
import { FC } from 'react';

type WeatherHumidity = {
    pop: number;
    rain: IRain;
}

const WeatherHumidity: FC<WeatherHumidity> = ({pop, rain}) => {
  return (
    <View>
      <Text />
    </View>
  )
}
export default WeatherHumidity
const styles = StyleSheet.create({})