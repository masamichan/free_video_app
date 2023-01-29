import React from "react";
import Analysis from "./components/Analysis/Analysis";
import Services from "./components/Services/Services";
import Summary from "./components/Summary/Summary";
import { TopBanner } from "./components/TopBanner/TopBanner";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
    </div>
  );
}

export default App;
