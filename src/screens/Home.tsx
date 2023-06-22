import {FC, useState, useCallback, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl, View} from 'react-native';
import Header from '../components/Header';
import {useAppSelector, useAppDispatch} from '../hooks';
import {
  fetchWeatherByCity,
  fetchWeatherByCords,
} from '../store/reducers/WeatherActionCreator';
import getCurrentLocationCords from '../utils/getCurrentLocationCords';
import Carousel from '../components/Carousel';
import Loader from '../components/Loader';
import Container from '../components/Container';

const Home: FC = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.weatherReducer);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getCurrentLocationCords()
      .then(loc => {
        dispatch(fetchWeatherByCords(loc, 1));
        setRefreshing(false);
        console.log('onRefreshFetching')
      })
      .catch(error => {
        setRefreshing(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (data)
      getCurrentLocationCords()
        .then(loc => {
          dispatch(fetchWeatherByCords(loc, 1));
          dispatch(fetchWeatherByCity('London', 1));
          console.log('onUseEffectFetching')
        })
        .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <View style={styles.container}>
        <Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => onRefresh}
            />
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
