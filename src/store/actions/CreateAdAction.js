import axios from 'axios';
import {endPoint} from '../../config/EndPoint';
import {USER_LOGIN} from '../TypeConstants';

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
    );

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
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(`${endPoint}/user/addCard`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };
