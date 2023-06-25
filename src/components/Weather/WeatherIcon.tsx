import {FC} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {useAppSelector} from '../../hooks';
import {selectIcon} from '../../store/reducers/WeatherSlice';

type WeatherIconProps =  {
  dt: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({dt}) => {
  const icon = useAppSelector(state => selectIcon(state, dt));

  return (
    <View style={styles.weatherIconContainer}>
      <Image
        style={styles.weatherIcon}
        //check for null icon
        source={{uri: `https://openweathermap.org/img/wn/${icon}@4x.png`}}
      />
    </View>
  );
};
export default WeatherIcon;

const styles = StyleSheet.create({
  weatherIconContainer: {
    width: '100%',
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
