import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
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
import AddWebinar from "./dashboardWebinars/AddWebinar/AddWebinar";
import WebinarsDetails from "./dashboardWebinars/WebinarsDetails/WebinarsDetails";
import CoursesDetails from "./dashboardCourses/CoursesDetails/CoursesDetails";
import AddDashboardRolesManagment from "./dashboardRolesManagment/AddDashboardRolesManagment";
import AddDashboardCareers from "./dashboardCareers/AddDashboardCareers";
import AddInsight from "./dashboardInsight/AddInsight/AddInsight";
import DashboardProfile from "./dashboardProfile/DashboardProfile";

function Dashboard(props) {
  const {
    match: { path },
  } = props;

  console.log(props.match.path);
  return (
    <DashboardLayout>
      <Switch>
      {/*  */}
      <Route path={`${path}/profile`}>
          <DashboardProfile />
        </Route>
        <Route path={`${path}/home`}>
          <DashboardHome />
        </Route>
        <Route path={`${path}/careers/add`}>
          <AddDashboardCareers />
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
        <Route path={`${path}/course/:id`}>
          <CoursesDetails />
        </Route>
        <Route path={`${path}/insight/add`}>
          <AddInsight />
        </Route>
        <Route path={`${path}/insight`}>
          <DashboardInsight />
        </Route>
        <Route path={`${path}/roles-management/add`}>
          <AddDashboardRolesManagment />
        </Route>
        <Route path={`${path}/roles-management`}>
          <DashboardRolesManagment />
        </Route>
        <Route path={`${path}/subscribers`}>
          <DashboardSubscribers />
        </Route>
        <Route path={`${path}/support-ticket`}>
          <DashboardSupportTicket />
        </Route>
        <Route path={`${path}/webinars/add`}>
          <AddWebinar />
        </Route>
        <Route path={`${path}/webinars`}>
          <DashboardWebinars />
        </Route>
        <Route path={`${path}/webinar/:id`}>
          <WebinarsDetails />
        </Route>
      </Switch>
    </DashboardLayout>
  );
}

export default withRouter(Dashboard);
