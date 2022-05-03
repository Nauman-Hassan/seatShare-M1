import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {USER_LOGIN} from '../TypeConstants';
import {Alert} from 'react-native';
export const CreateAdAction =
  (
    name,
    email,
    id,
    userSPoint,
    userEPoint,
    userTravelDay,
    userVehicle,
    userSTime,
    userVehicleNumber,
    travelCharges,
  ) =>
  async dispatch => {
    console.log(
      'create ad action run',
      name,
      email,
      id,
      userSPoint,
      userEPoint,
      userTravelDay,
      userVehicle,
      userSTime,
      userVehicleNumber,
      travelCharges,
    );

    // is m ay city add honay vala rehta h 

    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name,
      id,
      email,
      vehicleType: userVehicle,
      startPlace: userSPoint,
      endPlace: userEPoint,
      startTime: userSTime,
      travelDay: userTravelDay,
      description: 'hello i am owner of car',
      userVehicleNumber,
      travelCharges,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${endPoint}/user/addCard`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        if (JSON.parse(result).status === 'success') {
          Alert.alert('🎉', JSON.parse(result).message);
        }
      })
      .catch(error => {console.log('error', error)
      Alert.alert('🎉', JSON.parse(error).message);
    });
  };
