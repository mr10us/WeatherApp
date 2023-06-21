import {StyleSheet, Text, View} from 'react-native';
import WeatherContainer from './WeatherContainer';
import PlusButton from '../PlusButton';


const AddCityWeatherCard = () => {
  return (
    <WeatherContainer>
      <View style={styles.addCityWeather}>
        <PlusButton />
      </View>
    </WeatherContainer>
  );
};
export default AddCityWeatherCard;

const styles = StyleSheet.create({
  addCityWeather: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 25,
    // height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
