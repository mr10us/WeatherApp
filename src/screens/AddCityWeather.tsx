import {FC, useState, Suspense, useEffect} from 'react';
import Container from '../components/Container';
import Input from '../components/UI/Input';
import Loader from '../components/Loader';
import DropDownList from '../components/AddCityWeather/DropDownList';
import getLocationCords from '../utils/getLocationCords';
import {IGeolocationData} from '../interfaces/IGeolocationData';

const AddCityWeather: FC = () => {
  const [data, setData] = useState<IGeolocationData[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      getLocationCords(inputValue)
        .then(data => {
          if (data.length !== 0) setData(data);
          else setData([]);
        })
        .catch(error => console.log(error));
    } else setData([]);
  }, [inputValue]);

  return (
    <Container>
      <Input onChange={handleInputChange} />
      <Suspense fallback={<Loader loading />}>
        <DropDownList data={data} />
      </Suspense>
    </Container>
  );
};

export default AddCityWeather;
