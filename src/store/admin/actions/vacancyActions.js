import axios from 'axios';
import { successAxiosVacancy , errorAxiosVacancy } from './actions'


// const getOneVacancy = (id) => {
//   return (dispatch) => {
//     axios.get(`http://localhost:4000/vacancies/${id}`).then((data) => {
//       //  console.log(data.data.result)
//       dispatch(successAxiosVacancy(data.data.result));
//     }).catch((error) => {
//       dispatch(errorAxiosVacancy(error));
//     });
//   }
// };

const getAllVacancies = () => {
  return (dispatch) => {
    axios.get("http://localhost:4000/vacancies").then((data) => {
      dispatch(successAxiosVacancy(data.data.result));
    }).catch((error) => {
      dispatch(errorAxiosVacancy(error));
    });
  }
};

export {
  // getOneVacancy,
  getAllVacancies
}
