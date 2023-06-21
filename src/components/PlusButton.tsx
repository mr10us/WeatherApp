import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { PRIMARY_CL } from '../styles';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

const PlusButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AddCityWeather')}>
        <Icon name="plus" size={80} color={PRIMARY_CL.color} />
      </TouchableOpacity>
    </View>
  );
};

export default PlusButton;

const styles = StyleSheet.create({
  buttonContainer: {
    // styles for button container
  },
});
