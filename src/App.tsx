import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import AddNewData from "./Components/VillageProfile/AddNewData";
import PendingData from "./Components/VillageProfile/PendingData";
import VillageProfileHome from "./Components/VillageProfileHome";
import "./App.css"
import { db } from "./db/db";
import AllData from "./Components/VillageProfile/AllData";

export default function App() {
  db.open();
  return (
    <Router>
      <Switch>
        <Route path="/vp-app/app/add-new">
          <AddNewData data={{}} />
        </Route>
        <Route path="/vp-app/app/pending">
          <PendingData />
        </Route>
        <Route path="/vp-app/app/all">
          <AllData />
        </Route>
        <Route path="/vp-app/app">
          <VillageProfileHome />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/vp-app">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
