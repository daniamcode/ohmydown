import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadStatus } from "../actions/statusActions";
import Status from "./Status";
import Spinner from "./Spinner";

const Grid = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status.status);
  const isLoading = useSelector((state) => state.status.isLoading);

  useEffect(() => {
    dispatch(loadStatus());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <section className="center">
      {status.map((status) => (
        <Status key={status.id} status={status} />
      ))}
    </section>
  );
};

export default Grid;