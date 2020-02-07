import axios from 'axios';
import { successAxiosSphere , errorAxiosSphere } from './actions'


const getAllSpheres = () => {
  return (dispatch) => {
    axios.get("http://localhost:4000/spheres").then((data) => {
      dispatch(successAxiosSphere(data.data.result));
    }).catch((error) => {
      dispatch(errorAxiosSphere(error));
    });
  }
};

export {
  getAllSpheres
}
