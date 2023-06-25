import {FC, useState} from 'react';
import {
  NativeScrollEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WeatherCard from './Weather/WeatherCard';
import {ICityWeather} from '../interfaces/ICityWeather';
import AddCityWeatherCard from './AddCityWeather/AddCityWeatherCard';
import {WIDTH} from '../consts';

const Carousel: FC<{elements: ICityWeather[]}> = ({elements}) => {
  const [imgActive, setImgActive] = useState(0);

  const onchange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          contentOffset={{x: WIDTH, y: 0}}
          style={styles.wrap}>
          <AddCityWeatherCard />
          {elements.map((elem, index) => (
            <WeatherCard
              key={index}
              cityName={elem.city.name}
              weather={elem.list[0].weather.main}
              temperature={elem.list[0].main}
              dt={elem.list[0].dt}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          <Text key={0} style={imgActive == 0 ? styles.dotActive : styles.dot}>
            •
          </Text>
          {elements.map((_, index) => (
            <Text
              key={index + 1}
              style={imgActive == index + 1 ? styles.dotActive : styles.dot}>
              •
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Carousel;
const styles = StyleSheet.create({
  container: {
    height: '70%',
  },
  wrap: {
    width: WIDTH,
    backgroundColor: 'transparent',
  },
  wrapDot: {
    position: 'absolute',
    bottom: -20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 7,
    color: 'white',
    transform: [{scale: 4}],
  },
  dot: {
    margin: 7,
    color: 'rgba(0, 0, 0, 0.2)',
    transform: [{scale: 4}],
  },
});
