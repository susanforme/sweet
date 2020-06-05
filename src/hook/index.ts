import {Keyboard} from 'react-native';
import {useState} from 'react';

export function useKeyBoardHeight() {
  const [height, setHeight] = useState(0);
  const handler = Keyboard.addListener('keyboardDidShow', (e) => {
    if (height !== 0) {
      Keyboard.removeSubscription(handler);
    }
    setHeight(e.endCoordinates.height);
  });
  return height;
}
