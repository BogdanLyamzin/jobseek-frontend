const initialValue = {
  skill: null,
  language: null,
};

const reducer = (state=initialValue, action) => {
  switch (action.type) {
    case 'SUCCESS_AXIOS_LANGUAGE':
      return {
        language: action.language,
      };

    case 'SUCCESS_AXIOS_SKILL':
      return {
        skill: action.skill,
      };

    case "FAILURE_AXIOS":
      return {
        ...state,
        isError: true,
        error: action.payload,
      };

    case 'ERROR_SKILL':
      return {
        ...state,
        isError: true,
        skillError: action.skillError,
      };

    case 'ERROR_LANGUAGE':
      return {
        ...state,
        isError: true,
        languageError: action.languageError,
      };

    case 'SUCCESS_AXIOS_VACANCY':
      return {
        vacancy: action.vacancy,
      };
    case 'ERROR_VACANCY':
      return {
        ...state,
        isError: true,
        vacancyError: action.vacancyError,
      };
    case 'SUCCESS_AXIOS_SPHERE':
      return {
        sphere: action.sphere,
      };
    case 'ERROR_SPHERE':
      return {
        ...state,
        isError: true,
        sphereError: action.sphereError,
      };

    default:
      return state;
  }
};
export default reducer;
