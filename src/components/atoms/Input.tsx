import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { colors } from '../../theme/colors';

const Input = (props: TextInputProps) => {
  return <TextInput {...props} style={[styles.input, props.style]} placeholderTextColor={colors.secondary} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: colors.secondary,
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '100%',
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.white,
  },
});

export default Input;
