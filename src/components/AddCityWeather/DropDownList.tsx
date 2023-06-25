import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {PRIMARY_CL} from '../../styles';
import ListElement from './ListElement';
import {IGeolocationData} from '../../interfaces/IGeolocationData';
import {FC} from 'react';

type DropDownListData = {
  data: IGeolocationData[];
};

const DropDownList: FC<DropDownListData> = ({data}) => {

  const listHeight = data.length * 60 
  // 60 is the height of 1 ListElement
  return (
    <FlatList
      scrollEnabled={false}
      style={[styles.container, {height: listHeight}]}
      data={data}
      renderItem={data => <ListElement locationData={data.item} />}></FlatList>
  );
};
export default DropDownList;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexGrow: 0,
    backgroundColor: PRIMARY_CL.color,
    borderRadius: 15,
  },
});
