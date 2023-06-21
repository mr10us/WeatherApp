import {useNavigation} from '@react-navigation/native';
import {FC} from 'react';
import {Button} from 'react-native';
import Container from '../components/Container';

const AddCityWeather: FC = () => {

  const {goBack} = useNavigation();

  return (
    <Container>
      <Button title="Back" onPress={() => goBack()}></Button>
    </Container>
  );
};

export default AddCityWeather;
