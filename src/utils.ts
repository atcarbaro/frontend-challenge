import {Dimensions, PixelRatio, Platform} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const scale = windowWidth / 320;

export function normalize(size: number) {
  const newSize = size * scale; 
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const H1 = 50;
export const H2 = 32;
export const H3 = 24;
export const H4 = 16;
export const H4_5 = 15;
export const H5 = 14;
export const H6 = 12;
export const minValue = 4;

export const colors = {
  lightGrey:'#F0F6FA',
  white: '#FFFFFF',
  softGreen: '#3B9391',
  darkGrey: '#4B5959',
  black: '#000000',
  softOrange: '#FF8755',
  grey: '#C4C4C4',
  softPink: '#FFC5C5',
  brown: '#672A11',
  softGrey: '#A1A1A1'
};