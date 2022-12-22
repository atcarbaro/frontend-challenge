import styled from 'styled-components/native';
import { colors, windowHeight, windowWidth } from '../../utils';

export const ChatboxSafeAreaContainer = styled.View`
    flex: 1;
    backgroundColor: ${colors.white}
`;

export const FieldContainer = styled.View`
    width: ${windowWidth * 0.9};
    height: ${windowHeight * 0.1};
    backgroundColor: ${colors.white}
    flexDirection: row;
    alignItems: center;
    alignSelf: center;
    justifyContent: space-between;
    position: absolute;
    bottom: ${({ keyboardOffset }) => keyboardOffset > 0 ? keyboardOffset : keyboardOffset + windowHeight * 0.03}
`;

export const SendMessageButton = styled.TouchableOpacity`
    width: ${windowWidth * 0.15};
    height: ${windowHeight * 0.065};
    borderRadius: ${windowHeight * 0.065 / 2}
    backgroundColor: ${({ buttonIsActive }) => buttonIsActive ? colors.softOrange : colors.grey};
    justifyContent: center;
    alignItems: center;
`;

export const ButtonContainer = styled.View`
    width: ${windowWidth * 0.2};
    alignItems: flex-end;
`;

export const CustomFlatList = styled.FlatList.attrs({
    contentContainerStyle: {
        paddingBottom: windowHeight * 0.45
    }
})``;