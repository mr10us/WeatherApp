import {FC, PropsWithChildren} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {WIDTH} from '../../consts';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../hooks';
import {weatherSlice} from '../../store/reducers/WeatherSlice';

type WeatherContainer = {
  dt?: number;
};

const WeatherContainer: FC<PropsWithChildren<WeatherContainer>> = ({
  children,
  dt,
}) => {
  const {navigate} = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        if (dt) {
          dispatch(weatherSlice.actions.toggleActive(dt));
          navigate('WeatherScreen');
        }
      }}>
      {children}
    </TouchableOpacity>
  );
};

export default WeatherContainer;
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    padding: 20,
  },
});
