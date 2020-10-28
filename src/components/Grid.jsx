import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Status from "./Status";
import Spinner from "./Spinner";

const Grid = () => {
  const status = useSelector((state) => state.status.status);
  const isLoading = useSelector((state) => state.status.isLoading);

  return (
    <section className="center">
      <Status 
      //key={status.url}  
      status={status} />
    </section>
  );
};

export default Grid;
