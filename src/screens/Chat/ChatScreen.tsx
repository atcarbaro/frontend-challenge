import React, {  useCallback, useRef, useState } from 'react';
import { Image } from 'react-native';

import { useGetIcon } from '../../hooks/useGetIcon';

import CustomInput from '../../components/CustomInput';
import ChatMessage from '../../components/ChatMessage';
import { useGetKeyboard } from '../../hooks/useGetKeyboard';
import { IChatMessageItem, sendMessage } from '../../redux/slices/message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import { 
  ChatboxSafeAreaContainer,
  CustomFlatList,
  FieldContainer,
  ButtonContainer,
  SendMessageButton,
} from './styled';

export default function ChatScreen(){
  const sendIcon = useGetIcon('sendIcon');
  const [chatbox, setChatbox] = useState('');
  const {keyboardOffset} = useGetKeyboard();
  const dispatch = useDispatch();
  const { messages } = useSelector((state: RootState) => state.message);
  const flatListRef = useRef(null);

  const handleMessages = () => {
    const newMessage = {
      message: chatbox,
      status: 'sent',
      datetime: new Date().toLocaleString(),
      id: String(100000 + Math.floor(Math.random() * 900000))
    };

    dispatch(sendMessage(newMessage));
  };

  const handleChatBox = (name: string, value: string) => {
    setChatbox(value);
  };

  const submitMessage = () => {
    handleMessages();
    setChatbox('');
  };

  const goToIndex = useCallback((info) => {
    const wait = new Promise(resolve => setTimeout(resolve, 200));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    });
  }, []);

  const scrollToIndex = () => {
    if(flatListRef.current){
      flatListRef.current.scrollToIndex({index:messages.length - 1});
    }
  };

  const buttonIsActive = !!chatbox.trim().length;
  const handleSubmit = buttonIsActive ? submitMessage : null;
  
  return (
    <ChatboxSafeAreaContainer>
      <CustomFlatList 
        ref={flatListRef}
        data={messages}
        renderItem={ChatMessage}
        keyExtractor={(item: IChatMessageItem, index: number) => index.toString()}
        showsVerticalScrollIndicator={false}
        onContentSizeChange={scrollToIndex}
        onLayout={scrollToIndex}
        onScrollToIndexFailed={(index) => goToIndex(index)}
      />
      <FieldContainer keyboardOffset={keyboardOffset}>
        <CustomInput 
          inputType={'chat'} 
          name={'chatbox'}
          onChangeFunction={handleChatBox} 
          value={chatbox} 
          placeholder={'Ingresa aquí tu mensaje'} 
        />
        <ButtonContainer>
          <SendMessageButton 
            buttonIsActive={buttonIsActive} 
            onPress={handleSubmit} 
            activeOpacity={0.9}
          >
            <Image source={sendIcon} />
          </SendMessageButton>
        </ButtonContainer>
      </FieldContainer>
    </ChatboxSafeAreaContainer>
  );
}