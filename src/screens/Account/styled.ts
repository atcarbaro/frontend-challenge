
import styled from 'styled-components/native';
import { windowHeight, windowWidth, normalize, H1, H6, H2, H5, colors } from '../../utils';

export const AccountContainer = styled.View`
    flex: 1;
    flexDirection: column;
    backgroundColor: ${colors.white}
`;

export const AvatarContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
`;

export const Avatar = styled.View`
    width: 100px;
    height: 100px;
    borderRadius: ${normalize(H1)}
    backgroundColor: ${colors.grey}
`;

export const UserInformationContainer = styled.View`
    flex: 2;
    alignItems: center;
    justifyContent: flex-start;
    marginTop: ${windowHeight * 0.05}
`;

export const UserInfoBox = styled.View`
    marginVertical: ${windowHeight * 0.025}
`;

export const UserInfoTitle = styled.Text`
    color: ${colors.softGrey}
    fontWeight: bold;
    fontSize: ${normalize(H6)}
    textAlign: center;
`;

export const UserInfoText = styled.Text`
    color: ${colors.black}
    fontWeight: 500;
    fontSize: ${normalize(H5)};
    textAlign: center;
    marginTop: ${windowHeight * 0.01}
`;

export const ButtonContainer = styled.View`
    flex: 1;
    justifyContent: flex-end;
    alignItems: center;
    justifyContent: center;
    alignSelf: center;
    position: absolute;
    bottom: ${windowHeight * 0.045}
`;

export const SignOutButton = styled.TouchableOpacity`
    width: ${windowWidth * 0.9};
    height: ${windowHeight * 0.085};  
    borderRadius: ${normalize(H2)};
    backgroundColor: ${colors.softPink}
    alignItems: center;
    justifyContent: center;
`;

export const SignOutButtonText = styled.Text`
    color: ${colors.brown};
    fontSize: ${normalize(H6)};
    fontWeight: 700;
`;


