import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Detect px vs % automatically
const widthToDp = (value: number | string) => {
  if (typeof value === 'string') {
    // If you pass "30%" → treat as % directly
    return wp(value);
  }
  // If number is <= 1 → treat as fraction (0.5 = 50%)
  // Else → treat as px
  if (value <= 1) {
    return SCREEN_WIDTH * value;
  }
  return value; // Keep it as px
};

const heightToDp = (value: number | string) => {
  if (typeof value === 'string') {
    return hp(value);
  }
  if (value <= 1) {
    return SCREEN_HEIGHT * value;
  }
  return value; // Keep it as px
};

const fontToDp = (number: number) => {
  return RFValue(number);
};

const shadows = {
  dark: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  light: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.46,
    elevation: 3,
  },
  text: {
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 6,
  },
};

export { heightToDp, widthToDp, fontToDp, shadows };
