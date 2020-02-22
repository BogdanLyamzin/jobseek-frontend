import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import FormHRRegister from "./FormHRRegister/FormHRRegister";
import Vacancy2 from "./Vacancy2/Vacancy2";
import Title from "../../shared/Title/Title";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const RegisterHR = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [hiddenForm, setHiddenForm] = useState(false);
  const updateHRInfo = e => {
    e.preventDefault();
    setHiddenForm(!hiddenForm);
  };

  return (
    <Container>
      <Title text={t("COMPANY_PROFILE")} />
      <Paper className={classes.root}>
        <div className={classes.addvacancyMenu}>
          <Link to="/kostya/hrs/vacancy" className={classes.addvacancyMenuLink}>
            {t("COMPANY_VACANCIES")}
          </Link>
          <Link to="/kostya/hrs/" className={classes.addvacancyMenuLink}>
            {t("HR_MANAGERS")}
          </Link>
        </div>

        <div className={classes.addvacancyRoutes}>
          <Switch>
            <Route exact path="/kostya/hrs/">
              <FormHRRegister hidden={hiddenForm} updateHRInfo={updateHRInfo} />
            </Route>
            <Route path="/kostya/hrs/vacancy">
              <Vacancy2 />
            </Route>
          </Switch>
        </div>
      </Paper>
    </Container>
  );
};

export default RegisterHR;
