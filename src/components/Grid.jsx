import React from "react";
import { useSelector } from "react-redux";
import Status from "./Status";

const Grid = () => {
  const status = useSelector((state) => state.status.status);
  const isLoading = useSelector((state) => state.status.isLoading);
  const show = useSelector((state) => state.showStatus);

  return (
    <section className="center">
      <Status 
      show = {show} status={status} isLoading={isLoading}/>
    </section>
  );
};

export default Grid;
