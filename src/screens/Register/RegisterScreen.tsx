import React from 'react';

import CustomInput from '../../components/CustomInput';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGetKeyboard } from '../../hooks/useGetKeyboard';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/slices/user';
import { RootState } from '../../redux/store';
import { setSignIn } from '../../redux/slices/signIn';

import { 
  RegisterContainer,
  RegisterTitleContainer,
  Title,
  RegisterBodyContainer,
  RegisterFooterContainer,
  RegisterButton,
  RegisterButtonText
} from './styled';


export default function RegisterScreen(){
  const { navigate } = useNavigation();
  const {keyboardOffset} = useGetKeyboard();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleInputChange = (inputName: string, inputValue: string) => {
    const userData = {...user, [inputName]: inputValue};
    dispatch(setUserData(userData));
  };

  const handleRegister = () => {
    if(!user.name.trim().length || !user.email.trim().length || !user.password.trim().length){
      Alert.alert(
        'Campos requeridos',
        'Por favor completa los campos requeridos para continuar',
      );
      return;
    }

    dispatch(setSignIn());
    navigate('Home');
  };


  return (
    <RegisterContainer>
      <RegisterTitleContainer>
        <Title>Regístrate</Title>
      </RegisterTitleContainer>
      <RegisterBodyContainer>
        <CustomInput name={'name'} onChangeFunction={handleInputChange} value={user.name} placeholder={'Nombre de usuario'} />
        <CustomInput name={'email'} onChangeFunction={handleInputChange} value={user.email} placeholder={'Correo electrónico'} />
        <CustomInput name={'password'} onChangeFunction={handleInputChange} value={user.password} placeholder={'Contraseña'} isPassword/>
      </RegisterBodyContainer>
      <RegisterFooterContainer keyboardOffset={keyboardOffset}>
        <RegisterButton onPress={handleRegister}>
          <RegisterButtonText>Crear Cuenta</RegisterButtonText>            
        </RegisterButton>
      </RegisterFooterContainer>
    </RegisterContainer> 
  );
}
