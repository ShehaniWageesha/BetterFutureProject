/** @format */
import React from "react";
import { Route } from "react-router-dom";
import AddPolitician from "../pages/AddPolitician";
import EditPolitician from "../pages/EditPolitician";
import PoliticiansList from "../pages/PoliticianList";
import Politician from "../pages/Politician";
import AddPolicy from "../pages/AddPolicy";
import EditPolicy from "../pages/EditPolicy";
import PoliciesList from "../pages/PolicyList";
import Policy from "../pages/Policy";
import { RoutePaths } from "./route-paths";

const Routes = () => {
  const paths = RoutePaths;

  return (
    <>
      <Route path="/politicians" exact component={PoliticiansList} />
      <Route path="/dashPolitician" exact component={Politician} />
      <Route path={`${paths.editPolitician}:id`} component={EditPolitician} />
      <Route path={paths.createPolitician} component={AddPolitician} />
      <Route path="/policies" exact component={PoliciesList} />
      <Route path="/dashPolicy" exact component={Policy} />
      <Route path={`${paths.editPolicy}:id`} component={EditPolicy} />
      <Route path={paths.createPolicy} component={AddPolicy} />
    </>
  );
};

export default Routes;
