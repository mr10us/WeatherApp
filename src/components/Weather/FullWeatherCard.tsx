import {ScrollView, View, StyleSheet} from 'react-native';
import WeatherCityName from './WeatherCityName';
import WeatherInfo from './WeatherInfo';
import Animated, {ZoomIn} from 'react-native-reanimated';
import WeatherHumidity from './WeatherHumidity';
import {IRain, ITemp} from '../../interfaces/ICityWeather';
import {FC, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks';
import {weatherSlice} from '../../store/reducers/WeatherSlice';

type FullCard = {
  cityName: string;
  weatherInfo: {
    dt: number;
    weather: string;
    temp: ITemp;
    pop: number;
    rain: IRain;
  };
};

const FullWeatherCard: FC<FullCard> = ({cityName, weatherInfo}) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleGoBack = () => {
      dispatch(weatherSlice.actions.toggleActive(weatherInfo.dt));
      console.log('Got back');
    };

    const unsubscribe = navigation.addListener('beforeRemove', handleGoBack);

    return () => unsubscribe();
  }, []);

  console.log('i`m rendering')

  return (
    <View style={styles.view}>
      {/* <ScrollView contentContainerStyle={styles.view}> */}
      <WeatherCityName cityName={cityName} />
      <WeatherInfo
        dt={weatherInfo.dt}
        weather={weatherInfo.weather}
        temperature={weatherInfo.temp}
      />
      {/* </ScrollView> */}
      <WeatherHumidity pop={weatherInfo.pop} rain={weatherInfo.rain} />
    </View>
  );
};
export default FullWeatherCard;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 25,
  },
});
