import {FC, useState, useCallback, useEffect} from 'react';
import {StyleSheet, ScrollView, RefreshControl, View} from 'react-native';
import Header from '../components/Header';
import {useAppSelector, useAppDispatch} from '../hooks';
import {fetchWeatherByCords} from '../store/reducers/WeatherActionCreator';
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
        dispatch(
          fetchWeatherByCords({
            cords: {lat: loc.cords.lat, lon: loc.cords.lon},
            cnt: 1,
          }),
        );
        setRefreshing(false);
        console.log('onRefreshFetching');
      })
      .catch(error => {
        setRefreshing(false);
        console.log(error);
      });
  }, [dispatch, refreshing]);

  useEffect(() => {
    if (data.cities.length === 0)
      getCurrentLocationCords()
        .then(loc => {
          dispatch(
            fetchWeatherByCords({
              cords: {lat: loc.cords.lat, lon: loc.cords.lon},
              cnt: 1,
            }),
          );
          console.log('onUseEffectFetching');
        })
        .catch(error => console.log(error));
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
              onRefresh={onRefresh}
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
