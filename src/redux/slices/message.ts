import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IChatMessageItem {
    datetime: string;
    id: string;
    message: string;
    status: string;
}

export const defaultMessage: Array<IChatMessageItem> = [{
  message: 'Hola humano, ¿Cómo estás?.',
  status: 'recieved',
  datetime: new Date().toLocaleString(),
  id: '12391293912'
}];

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: defaultMessage as IChatMessageItem[],
  },
  reducers: {
    sendMessage(state, action: PayloadAction<IChatMessageItem>) {
      const messageList = [action.payload, ...defaultMessage]
      state.messages = [...state.messages, ...messageList];
    },
    clearMessages(state){
      state.messages = [...defaultMessage];
    }
  }
});

export const { sendMessage, clearMessages } = messageSlice.actions;
export default messageSlice.reducer;