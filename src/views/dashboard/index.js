import React from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardCareers from "./dashboardCareers/DashboardCareers";
import DashboardCaseStudies from "./dashboardCaseStudies/DashboardCaseStudies";
import DashboardCourses from "./dashboardCourses/DashboardCourses";
import DashboardHome from "./dashboardHome/DashboardHome";
import DashboardInsight from "./dashboardInsight/DashboardInsight";
import DashboardSubscribers from "./dashboardSubscribers/DashboardSubscribers";
import DashboardRolesManagment from "./dashboardRolesManagment/DashboardRolesManagment";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardSupportTicket from "./dashboardSupportTicket/DashboardSupportTicket";
import DashboardWebinars from "./dashboardWebinars/DashboardWebinars";

function Dashboard(props) {
  const {
    match: { path },
  } = props;

  console.log(props.match.path);
  return (
    <DashboardLayout>
      <Switch>
        <Route path={`${path}/home`}>
          <DashboardHome />
        </Route>
        <Route path={`${path}/careers`}>
          <DashboardCareers />
        </Route>
        <Route path={`${path}/case-studies`}>
          <DashboardCaseStudies />
        </Route>
        <Route path={`${path}/courses`}>
          <DashboardCourses />
        </Route>
        <Route path={`${path}/insight`}>
          <DashboardInsight />
        </Route>
        <Route path={`${path}/roles-managment`}>
          <DashboardRolesManagment />
        </Route>
        <Route path={`${path}/subscribers`}>
          <DashboardSubscribers />
        </Route>
        <Route path={`${path}/support-ticket`}>
          <DashboardSupportTicket />
        </Route>
        <Route path={`${path}/webinars`}>
          <DashboardWebinars />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
