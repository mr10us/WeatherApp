import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import WeatherContainer from '../Weather/WeatherContainer';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY_CL } from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const AddCityWeatherCard = () => {

  const {navigate} = useNavigation();

  return (
    <WeatherContainer>
      <TouchableOpacity onPress={() => navigate('AddCityWeather')}>
        <View style={styles.addCityWeather}>
          <Icon name="plus" size={80} color={PRIMARY_CL.color} />
        </View>
      </TouchableOpacity>
    </WeatherContainer>
  );
};
export default AddCityWeatherCard;

const styles = StyleSheet.create({
  addCityWeather: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 25,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
