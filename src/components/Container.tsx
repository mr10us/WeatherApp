import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {PRIMARY_BG_CL_ONE, PRIMARY_BG_CL_TWO} from '../styles';
import {FC, PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Container: FC<PropsWithChildren> = ({children}) => {
  return (
    <LinearGradient
      colors={[
        PRIMARY_BG_CL_ONE.backgroundColor,
        PRIMARY_BG_CL_TWO.backgroundColor,
      ]}
      style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};
export default Container;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,  
  },
  container: {
    flex: 1,
  }
});
