import { useFonts } from 'expo-font';

export const loadCustomFonts = async () => {
  await useFonts({
    'AlexLight': require('../../assets/fonts/Alexandria-Light.ttf'),
    'AlexRegular': require('../../assets/fonts/Alexandria-Regular.ttf'),
    'AlexBold': require('../../assets/fonts/Alexandria-SemiBold.ttf')
  });
};