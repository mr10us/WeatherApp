import {ScrollView, StyleSheet, View} from 'react-native';
import {PRIMARY_CL} from '../../styles';
import ListElement from './ListElement';
import {IGeolocationData} from '../../interfaces/IGeolocationData';
import {FC} from 'react';

type DropDownListData = {
  data: IGeolocationData[];
};

const DropDownList: FC<DropDownListData> = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((info, index) => (
        <ListElement locationData={info} key={index} />
      ))}
    </View>
  );
};
export default DropDownList;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    backgroundColor: PRIMARY_CL.color,
    borderRadius: 15,
  },
});
