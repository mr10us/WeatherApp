import {FC} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useAppSelector} from '../../hooks';
import {selectIcon} from '../../store/reducers/WeatherSlice';
import { BOX_WHITE_SHADOW } from '../../styles';

interface WeatherIconProps {
  arrayIndex: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({arrayIndex}) => {
  const icon = useAppSelector(state => selectIcon(state, arrayIndex));

  return (
    <View style={styles.weatherIconContainer}>
      <Image
        style={styles.weatherIcon}
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
      />
    </View>
  );
};
export default WeatherIcon;

const styles = StyleSheet.create({
  weatherIconContainer: {
    width: '100%',
    borderColor: 'purple',
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  weatherIcon: {
    // ...BOX_WHITE_SHADOW,
    width: '100%',
    height: 200
  },
});
