import React from 'react';
import { RootState, persistor } from '../../redux/store';
import { setSignOut } from '../../redux/slices/signIn';
import { useDispatch, useSelector } from 'react-redux';
import { UserData, setUserData } from '../../redux/slices/user';
import { clearMessages } from '../../redux/slices/message';
import { 
  AccountContainer, 
  Avatar, 
  AvatarContainer, 
  ButtonContainer, 
  SignOutButton, 
  SignOutButtonText, 
  UserInfoBox, 
  UserInfoText, 
  UserInfoTitle, 
  UserInformationContainer 
} from './styled';

export default function AccountScreen(){
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  const handleSignOut = () => {
    dispatch(setSignOut());
    dispatch(setUserData({} as UserData));
    dispatch(clearMessages());
    persistor.purge();
  };

  return (
    <AccountContainer>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <UserInformationContainer>
        <UserInfoBox>
          <UserInfoTitle>Nombre de usuario</UserInfoTitle>
          <UserInfoText>{user.name}</UserInfoText>
        </UserInfoBox>
        <UserInfoBox>
          <UserInfoTitle>Correo electrónico</UserInfoTitle>
          <UserInfoText>{user.email}</UserInfoText>
        </UserInfoBox>
      </UserInformationContainer>
      <ButtonContainer>
        <SignOutButton onPress={handleSignOut}>
          <SignOutButtonText>Cerrar Sesión</SignOutButtonText>
        </SignOutButton>
      </ButtonContainer>
    </AccountContainer>
  );
}
