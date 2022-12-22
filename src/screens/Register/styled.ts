import styled from 'styled-components/native';
import { windowHeight, normalize, H3, windowWidth, H2, H6, colors } from '../../utils';

export const RegisterContainer = styled.SafeAreaView`
    flex: 1;
    backgroundColor: ${colors.white}
`;

export const RegisterTitleContainer = styled.View`
    height: ${windowHeight * 0.1};
    marginTop: ${windowHeight * 0.03};
    alignItems: center;
`;

export const Title = styled.Text`
    fontSize: ${normalize(H3)}
    fontWeight: 700;
`;

export const RegisterBodyContainer = styled.View`
    height: ${windowHeight * 0.5};
    alignItems: center;
`;

export const RegisterFooterContainer = styled.View`
    width: ${windowWidth};
    height: ${windowHeight * 0.15};
    alignItems: center;
    position: absolute;
    bottom: ${({ keyboardOffset }) => keyboardOffset > 0 ? keyboardOffset - windowHeight * 0.04: keyboardOffset}
`;

export const RegisterButton = styled.TouchableOpacity`
    backgroundColor: ${colors.softOrange}
    width: ${windowWidth * 0.9};
    height: ${windowHeight * 0.085};
    borderRadius: ${normalize(H2)};
    alignItems: center;
    justifyContent: center;
`;

export const RegisterButtonText = styled.Text`
    color: ${colors.brown}
    fontSize: ${normalize(H6)};
    fontWeight: 700;
`;

