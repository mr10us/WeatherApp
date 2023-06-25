import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {PRIMARY_BG_CL_TWO} from '../../styles';
import {useAppDispatch} from '../../hooks';
import {fetchWeatherByCords} from '../../store/reducers/WeatherActionCreator';
import {IGeolocationData} from '../../interfaces/IGeolocationData';
import { useNavigation } from '@react-navigation/native';

type ListElement = {
  locationData: IGeolocationData;
};

const ListElement: FC<ListElement> = ({locationData}) => {
  const dispatch = useAppDispatch();
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('Home');
        dispatch(fetchWeatherByCords([locationData.lat, locationData.lon], 1));
      }}>
      <Icon name="map-pin" color={PRIMARY_BG_CL_TWO.backgroundColor} />
      <Text style={styles.location}>
        {locationData.name}, {locationData.state && locationData.state + ', '}
        {locationData.country}
      </Text>
    </TouchableOpacity>
  );
};
export default ListElement;
const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  location: {
    fontSize: 18,
    color: PRIMARY_BG_CL_TWO.backgroundColor,
  },
});
