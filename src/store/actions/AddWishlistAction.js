import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {USER_LOGIN} from '../TypeConstants';
import {Alert} from 'react-native';

export const AddWishlistAction =
  (
    param
  ) =>
  async dispatch => {
    console.log(
      'create ad action run',
     param
    );
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      id: param.id,
      name:param.name,
      email: param.email,
      vehicleType: param.vehicleType,
      startPlace: param.startPlace,
      endPlace: param.endPlace,
      startTime: param.startTime,
      travelDay: param.travelDay,
      description: param.description,
      userId: param.userId,
      cardDate: param.cardDate,
      cardTime: param.cardTime,
      cardStatus: param.cardStatus,
      userVehicleNumber: param.userVehicleNumber,
      travelCharges: param.travelCharges,
      heartUser: param.heartUser,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      // `${endPoint}/user/userWishlist`,
      'https://seatshare-server.herokuapp.com/user/userWishlist',
      requestOptions,
    )
      .then(response => response.text())
      .then(result =>{
         console.log(result)
         if (JSON.parse(result).status === 'success') {
           Alert.alert('🎉', JSON.parse(result).message);
         } 
        })
      .catch(error => {console.log('error', error)
     Alert.alert('⚠️', 'Something went wrong ');});
  };
