import axios from 'axios';
import { successAxiosLang, errorAxiosLang } from './actions'


// const getOneLanguage = (id) => {
//     return (dispatch) => {
//             axios.get(`http://localhost:4000/languages/${id}`).then((data) => {
//               console.log(data.data);
//             dispatch(successAxiosLangOne(data.data.result));
//         }).catch((error) => {
//             dispatch(errorAxiosLang(error));
//         });
//     }
// };

const getAllLanguages = () => {
    return (dispatch) => {
            axios.get("http://localhost:4000/languages").then((data) => {
                // console.log(data);
            dispatch(successAxiosLang(data.data.result));
        }).catch((error) => {
            dispatch(errorAxiosLang(error));
        });
    }
};

export {
    // getOneLanguage,
    getAllLanguages,
}
