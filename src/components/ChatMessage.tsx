import React from 'react';
import styled from 'styled-components/native';
import { H4_5, H6, colors, normalize, windowHeight, windowWidth } from '../utils';
import { IChatMessageItem } from '../redux/slices/message';

export interface IChatMessageProps {
    item: IChatMessageItem;
}

export default function ChatMessage({ item }: IChatMessageProps){
  return (
    <ChatMessageContainer status={item.status} >
      <ChatMessageBox status={item.status} widthLength={item.message.length}>
        <ChatMessageText status={item.status}>{item.message}</ChatMessageText>
      </ChatMessageBox>
    </ChatMessageContainer>
  );
}

const ChatMessageContainer = styled.View`
    marginVertical: ${windowHeight * 0.01};
    width: ${windowWidth * 0.9};
    flexDirection: row;
    alignSelf: center;
    justifyContent: ${({status}) => status === 'recieved' ? 'flex-start' : 'flex-end'};
`;

const ChatMessageBox = styled.View`
    padding: ${String(normalize(H6))}px;
    backgroundColor: ${({status}) => status === 'recieved' ? colors.lightGrey : colors.softGreen};
    borderRadius: ${normalize(H4_5)}
    ${({ widthLength }) => widthLength > 50 && ({
        width: windowWidth * 0.75
    })}
`;

const ChatMessageText = styled.Text`
  color: ${({status}) => status === 'recieved' ? colors.darkGrey : colors.white };
`;