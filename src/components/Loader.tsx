import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {SECONDARY_CL} from '../styles';
import {FC} from 'react';

type Loader = {
  loading: boolean;
};
const Loader: FC<Loader> = ({loading}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={SECONDARY_CL.color}
        animating={loading}
      />
    </View>
  );
};
export default Loader;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});
