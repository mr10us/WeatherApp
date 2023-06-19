import {FC} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { CONTAINER } from '../styles';
import { SECONDARY_CL } from '../styles';

const Header: FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.user}>
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}} style={styles.avatar}></Image>
        <Text style={styles.userName}>Unknown user</Text>
      </View>
      <Icon name="setting" size={35} color={SECONDARY_CL.color} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...CONTAINER
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  userName: {
    fontSize: 20,
    marginLeft: 10,
  },

});
