import call from 'react-native-phone-call';



export const PhoneCall=(mobile)=>{
console.log('running i action  phone call 1', mobile);
const args = {
  number: `0${mobile}`, // String value with the number to call
  // prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
  // skipCanOpen: true, // Skip the canOpenURL check
};

call(args).catch(console.error);
console.log('running i action  phone call 2');
}



