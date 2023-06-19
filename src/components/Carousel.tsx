import {FC, useState} from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import WeatherCard from './WeatherCard/WeatherCard';
import {ICityWeather} from '../interfaces/ICityWeather';

const WIDTH = Dimensions.get('window').width;

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
          style={styles.wrap}>
          {elements.map((elem, index) => (
            <WeatherCard
              key={index}
              cityName={elem.city.name}
              weather={elem.list[0].weather.main}
              temperature={elem.list[0].main}
              index={index}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {elements.map((_, index) => (
            <Text
              key={index}
              style={imgActive == index ? styles.dotActive : styles.dot}>
              ⦿
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
    flex: 1,
  },
  wrap: {
    width: WIDTH,
  },
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
