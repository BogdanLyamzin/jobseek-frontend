import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { getOneHR } from "../../store/hr/actions";
import HomeHR from "../../components/HR/HomeHR/HR";
import VacancyHR from "../../components/HR/VacancyHR";
import OneCandidate from "../../components/OneCandidate";
import AddVacancy from "../../components/Vacancy/AddVacancy";
import UpdateVacancy from "../../components/Vacancy/UpdateVacancy/UpdateVacancy";


const HrPage = ({ getOneHR }) => {

  useEffect(() => {
    getOneHR("5e3c361c657e122a841e88e4");
  }, [getOneHR]);

  return (
    
        <Switch>
          <Route path="/hr/vacancy" component={VacancyHR} />
          <Route path="/hr/vacancyAdd" component={AddVacancy} />
          <Route path="/hr/oneCandidate" component={OneCandidate} />
          <Route path="/hr/updateVacancy/:id" component={UpdateVacancy} />
          <Route path="/hr" component={HomeHR} />
        </Switch>
  );
};

const mapDispatchToProps = {
  getOneHR
};

export default connect(null, mapDispatchToProps)(HrPage);
