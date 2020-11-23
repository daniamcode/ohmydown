import React from "react";
import { useSelector } from "react-redux";
import Status from "./LandingPage";

const Grid = () => {
  const loadStatusResponse = useSelector((state) => state.statusReducer.loadStatus);
  const show = useSelector((state) => state.statusReducer.showStatus);

  return (
    <section className="center">
      <Status 
      show = {show} loadStatusResponse={loadStatusResponse} />
    </section>
  );
};

export default Grid;
