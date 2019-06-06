import React from "react";
import Resume from "./resume";
import Project from "./project";
import Landing from "./landing";
import Contact from "./contact";
import About from "./about";
import { Switch, Route } from "react-router-dom";
const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Landing} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Project} />
      <Route path="/contact" component={Contact} />}
    </Switch>
  );
};

export default Main;
