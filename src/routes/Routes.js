import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { ROUTES } from "./routeNames";
import ToDoListContainer from "../pages/ToDoListPage/containers/ToDoListContainer";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={ROUTES.TO_DO_LIST} component={ToDoListContainer} />
        <Redirect path="*" to={ROUTES.TO_DO_LIST} />
      </Switch>
    </div>
  );
};

export default Routes;
