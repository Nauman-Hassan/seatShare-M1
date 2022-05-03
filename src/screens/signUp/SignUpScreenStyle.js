import {StyleSheet, Platform} from 'react-native';

const SignUpScreenStyle = StyleSheet.create({
  ImageView: {
    width: '100%',
    height: '100%',
    // flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userlogo: {
    marginTop: '5%',
    height: 110,
    width: 110,
  },
  userinp: {
    // backgroundColor: '#29AB87',
    borderColor: '#29AB87',
    width: '80%',
    marginVertical: '2.5%',
  },
  userinp1: {
    width: '80%',
    marginVertical: '2.5%',
    borderRadius: 5,
    borderWidth: 0.5,
  },
  userinp12: {
    width: '80%',
    height: 55,
    marginVertical: '2.5%',
    borderRadius: 5,
    borderWidth: 0.5,
    
  },

  inpView: {
    // backgroundColor: 'green',
    width: '100%',
    marginTop: 30,

    // flex: 3,
  },

  SignUpBtn: {
    backgroundColor: '#29AB87',
    width: '50%',
    marginVertical: '10%',
    paddingHorizontal: '7%',
    paddingVertical: 5,
  },
  SignUpBtn1: {
    backgroundColor: '#29AB87',
    width: '50%',
    marginVertical: '2%',
    paddingHorizontal: '7%',
    paddingVertical: 5,
    marginBottom:90
  },
  SignUpText: {
    fontSize: 20,
    marginTop: '5%',
    fontWeight: 'bold',
    color: '#29AB87',
  },
});
export default SignUpScreenStyle;
