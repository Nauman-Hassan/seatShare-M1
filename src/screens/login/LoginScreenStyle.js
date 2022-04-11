import {StyleSheet, Platform} from 'react-native';

const LoginScreenStyle = StyleSheet.create({
  ImageView: {
    // backgroundColor: '#1B2635',
    width: '100%',
    height: '100%',
    // flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userlogo: {
    marginTop: '20%',
    height: 110,
    width: 110,
  },
  userinp: {
    // backgroundColor: '#29AB87',
    borderColor: '#29AB87',
    width: '80%',
    marginVertical: '4%',
  },

  inpView: {
    // backgroundColor: 'green',
    width: '100%',
    marginTop: 30,

    // flex: 3,
  },

  loginBtn: {
    backgroundColor: '#29AB87',
    width: '50%',
    marginVertical: '10%',
    paddingHorizontal: '7%',
    paddingVertical: 5,
  },
  loginText: {
    fontSize: 20,
    marginTop: '5%',
    fontWeight: 'bold',
    color: '#29AB87',
  },
});
export default LoginScreenStyle;
