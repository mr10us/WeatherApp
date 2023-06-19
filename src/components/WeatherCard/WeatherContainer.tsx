import { PropsWithChildren } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function WeatherContainer(props: PropsWithChildren) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '60%',
    borderColor: 'red',
    borderWidth: 2,
    padding: 5,
    overflow: 'hidden'
  }
});
