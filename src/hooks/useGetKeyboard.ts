import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

export const useGetKeyboard = () => {
  const [visible, setVisible] = useState(false);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const showEvent = 'keyboardWillShow';
  const hideEvent = 'keyboardWillHide';

  function dismiss() {
    Keyboard.dismiss();
    setVisible(false);
  }

  useEffect(() => {
    function onKeyboardShow(e) {
      setKeyboardOffset(e.endCoordinates.height);
      setVisible(true);
    }

    function onKeyboardHide() {
      setKeyboardOffset(0);
      setVisible(false);
    }

    const showSubscription = Keyboard.addListener(showEvent, onKeyboardShow);
    const hideSubscription = Keyboard.addListener(hideEvent, onKeyboardHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return {
    visible,
    dismiss,
    keyboardOffset,
  };
};