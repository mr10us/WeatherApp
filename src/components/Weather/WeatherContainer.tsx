import {PropsWithChildren} from 'react';
import {View, StyleSheet} from 'react-native';
import { WIDTH } from '../../consts';


export default function WeatherContainer(props: PropsWithChildren) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    padding: 20,
  },
});
