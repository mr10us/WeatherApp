import {FC, useState, useCallback, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl, View} from 'react-native';
import Header from '../components/Header';
import {useAppSelector, useAppDispatch} from '../hooks';
import {
  fetchWeatherByCity,
  fetchWeatherByCords,
} from '../store/reducers/WeatherActionCreator';
import getLocationCords from '../utils/getLocationCords';
import Carousel from '../components/Carousel';
import Loader from '../components/Loader';
import Container from '../components/Container';

const Home: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.weatherReducer);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getLocationCords()
      .then(loc => {
        dispatch(fetchWeatherByCords(loc, 1));
        setRefreshing(false);
      })
      .catch(error => {
        console.error(error);
        setRefreshing(false);
      });
  }, [dispatch]);

  useEffect(() => {
    getLocationCords()
      .then(loc => {
        dispatch(fetchWeatherByCords(loc, 1));
        dispatch(fetchWeatherByCity('London', 1));
      })
      .catch(error => console.error(error));
  }, [dispatch]);

  return (
    <Container>
      <View style={styles.container}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {data.isLoaded ? (
            <Carousel elements={data.cities} />
          ) : (
            <Loader loading={!data.isLoaded} />
          )}
        </ScrollView>
      </View>
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
  },
});
