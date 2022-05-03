import {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { CreateAdAction } from '../../store/actions/CreateAdAction';


export function UseCreateAd() {
  const activeUser = useSelector(state => state.LoginReducer.activeUser.data);
  console.log('activeUser in App--->', activeUser);



    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userId, setUserId] = useState('');
    const [userCity, setUserCity] = useState('');
    const [userSPoint, setUserSPoint] = useState('');
    const [userEPoint, setUserEPoint] = useState('');
    const [userSTime, setUserSTime] = useState('');
    const [userTravelDay, setUserTravelDay] = useState('');
    const [userVehicle, setUserVehicle] = useState('');
    const [userImage, setUserImage] = useState('');
    const [userVehicleNumber, setUserVehicleNumber] = useState('');
    const [travelCharges, setTravelCharges] = useState('');


  const dispatch = useDispatch();
  const ctaCreateAd = () => {
  
    setUserImage(
      'https://res.cloudinary.com/seatshare/image/upload/v1638596467/User/Card/waxxh0bnqzkgle8h0qlo.png',
    );
    console.log("user", activeUser.name)
    console.log("user", activeUser.email)
    console.log("user", activeUser.id)
    console.log('user start point', userSPoint);
    console.log('user end point', userEPoint);
    console.log('user time', userSTime);
    console.log('user day', userTravelDay);
    console.log('user city', userCity);
    console.log('user vehicle', userVehicle);
    console.log('user Image', userImage);
    console.log('user vehicle number', userVehicleNumber);
    console.log('user charges', travelCharges);
    dispatch(
      CreateAdAction(
        activeUser.name,
        activeUser.email,
        activeUser.id,
        userSPoint,
        userEPoint,
        userTravelDay,
        userVehicle,
        userSTime,
        userVehicleNumber,
        travelCharges,
      ),
    );

    setUserSPoint('')
    setUserEPoint('')
    setUserSTime('')
    setUserTravelDay('')
    setUserVehicle('')
    setUserVehicleNumber('')
    setTravelCharges('')
    
  };

  return [
    ctaCreateAd,
    userCity,
    setUserCity,
    userSPoint,
    setUserSPoint,
    userEPoint,
    setUserEPoint,
    userSTime,
    setUserSTime,
    userTravelDay,
    setUserTravelDay,
    userVehicle,
    setUserVehicle,
    userImage,
    setUserImage,
    userVehicleNumber,
    setUserVehicleNumber,
    travelCharges,
    setTravelCharges,
  ];
}
