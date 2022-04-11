import {StyleSheet, Platform} from 'react-native';

const OnboardingScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: '#1B2635',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },

  btn1: {
    backgroundColor: '#29AB87',
    width: '100%',
    paddingHorizontal: '7%',
    paddingVertical: 5,
  },
});
export default OnboardingScreenStyle;
