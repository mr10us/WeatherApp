import FullWeatherCard from '../components/Weather/FullWeatherCard';
import Container from '../components/Container';
import {useAppSelector} from '../hooks';
import {selectActive} from '../store/reducers/WeatherSlice';

const WeatherScreen = () => {
  const item = useAppSelector(selectActive);
  return (
    <Container>
      <FullWeatherCard
        weatherInfo={{
          dt: item.list[0].dt,
          weather: item.list[0].weather.main,
          temp: item.list[0].main,
          pop: item.list[0].pop,
          rain: item.list[0].rain
        }}
        cityName={item.city.name}
      />
    </Container>
  );
};
export default WeatherScreen;
