import {FC, useState, useCallback, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl, View} from 'react-native';
import Header from '../layouts/Header';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import WeatherContainer from '../components/WeatherCard/WeatherContainer';
import {useAppSelector, useAppDispatch} from '../hooks';
import {
  fetchWeatherByCity,
  fetchWeatherByCords,
} from '../store/reducers/WeatherActionCreator';
import getLocationCords from '../utils/getLocationCords';
import Carousel from '../components/Carousel';

const Home: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getLocationCords()
      .then(loc => {
        dispatch(fetchWeatherByCords(loc, 1));
        setRefreshing(false);
      })
      .catch(error => error.message);
  }, []);

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.weatherReducer);

  useEffect(() => {
    getLocationCords()
      .then(loc => dispatch(fetchWeatherByCords(loc, 1)))
      .catch(error => error.message);
  }, []);

  return (
    <>
      <Header />
      <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <WeatherContainer>
            <Carousel elements={data.cities} />
          </WeatherContainer>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    justifyContent: 'space-between',
  },
  scrollView: {
    height: '100%',
  },
});
