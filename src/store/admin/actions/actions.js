const successAxiosSkill = (payload) => {
    return {
      type: 'SUCCESS_AXIOS_SKILL',
      skill: payload,
    };
};
const errorAxiosSkill = (payload) => {
  return {
    type: 'ERROR_SKILL',
    skillError: payload,
  };
};
const successAxiosLang = (payload) => {
  return {
    type: 'SUCCESS_AXIOS_LANGUAGE',
    language: payload,
  };
};

const errorAxiosLang = (payload) => {
    return {
      type: 'ERROR_LANGUAGE',
      languageError: payload,
    };
};
const successAxiosVacancy = (payload) => {
  return {
    type: 'SUCCESS_AXIOS_VACANCY',
    vacancy: payload,
  };
};

const errorAxiosVacancy = (payload) => {
  return {
    type: 'ERROR_VACANCY',
    vacancyError: payload,
  };
};
const successAxiosSphere = (payload) => {
  return {
    type: 'SUCCESS_AXIOS_SPHERE',
    sphere: payload,
  };
};

const errorAxiosSphere = (payload) => {
  return {
    type: 'ERROR_SPHERE',
    sphereError: payload,
  };
};
export {
  successAxiosSkill,
  errorAxiosSkill,
  successAxiosLang,
  errorAxiosLang,
  successAxiosVacancy,
  errorAxiosVacancy,
  successAxiosSphere,
  errorAxiosSphere,
}
