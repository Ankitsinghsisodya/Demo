import React from "react";
import Nav from "../components/Nav";
import Team from "../components/Team";
import Alumni from "../components/Alumni";
import Contact from "../components/Contact";

function SecondPage() {
  return (
    <div class="overflow-x-hidden w-full">
      <Nav />
      <Team/>
      <Alumni/>
      <Contact/>
    </div>
  );
}

export default SecondPage;
