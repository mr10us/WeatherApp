import React, {FC, useCallback} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {debounce} from 'lodash';
import {PRIMARY_CL} from '../../styles';

type InputProps = {
  onChange: (value: string) => void;
};

const Input: FC<InputProps> = ({onChange}) => {
  const handleInputChange = useCallback(
    debounce((text: string) => {
      onChange(text);
    }, 300),
    [onChange],
  );

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleInputChange}
      placeholder="Search for city..."
      keyboardType="default"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 12,
    padding: 15,
    backgroundColor: PRIMARY_CL.color,
    borderRadius: 15,
  },
  icon: {},
});

export default Input;
