import React from 'react';
import styled from 'styled-components/native';
import { windowWidth, windowHeight, normalize, H2, H6, colors } from '../utils';

export interface ICustomInputProps {
  onChangeFunction: (inputName: string, inputValue: string) => void;
  value: string;
  placeholder: string;
  isPassword?: boolean;
  name: string;
  inputType?: string;
}

export interface IStyledTextInputProps {
  inputType?: string;
}

export default function CustomInput({ inputType, name, onChangeFunction, value, placeholder, isPassword}: ICustomInputProps){
  return (
    <StyledTextInput
      name={name}
      onChangeText={(val: string) => onChangeFunction(name, val)}
      value={value}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      autoCapitalize={false}
      inputType={inputType}
      selectionColor={colors.darkGrey}
    />
  );
}

const StyledTextInput = styled.TextInput.attrs({
  placeholderTextColor: ({ inputType }) => inputType === 'chat' ? colors.darkGrey : colors.black
})<IStyledTextInputProps>`
  width: ${({ inputType }) => inputType === 'chat' ? windowWidth * 0.7 : windowWidth * 0.9};
  height: ${({ inputType }) => inputType === 'chat' ? windowHeight * 0.065 : windowHeight * 0.085};
  paddingHorizontal: ${windowWidth * 0.06};
  marginVertical: ${windowHeight * 0.01};
  backgroundColor: ${({ inputType }) => inputType === 'chat' ? colors.white : colors.lightGrey};
  borderRadius: ${normalize(H2)};
  fontSize: ${normalize(H6)}
  color: ${({ inputType }) => inputType === 'chat' ? colors.darkGrey : colors.black };
  ${({ inputType }) => inputType === 'chat' && ({
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  })};
`;




