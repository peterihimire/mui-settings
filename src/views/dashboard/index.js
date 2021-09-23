import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardHome from "./dashboardHome/DashboardHome";
import DashboardLayout from "./layout/DashboardLayout";

function Dashboard(props) {
  const {
    match: { path },
  } = props;

  console.log(props.match.path);
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${path}/dashboard`}>
          <DashboardHome />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
