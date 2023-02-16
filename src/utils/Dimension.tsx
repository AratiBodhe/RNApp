import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

const wp = (number: number) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const hp = (number: number) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export {wp, hp};
