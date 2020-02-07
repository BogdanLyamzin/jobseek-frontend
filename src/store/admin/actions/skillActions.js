import axios from 'axios';
import { successAxiosSkill , errorAxiosSkill } from './actions'


// const getOneSkill = (id) => {
//     return (dispatch) => {
//             axios.get(`http://localhost:4000/skills/${id}`).then((data) => {
//             dispatch(successAxiosSkill(data.data.result));
//         }).catch((error) => {
//             dispatch(errorAxiosSkill(error));
//         });
//     }
// };

const getAllSkills = () => {
    return (dispatch) => {
            axios.get("http://localhost:4000/skills").then((data) => {
            dispatch(successAxiosSkill(data.data.result));
        }).catch((error) => {
            dispatch(errorAxiosSkill(error));
        });
    }
};

export {
    // getOneSkill,
    getAllSkills
}
