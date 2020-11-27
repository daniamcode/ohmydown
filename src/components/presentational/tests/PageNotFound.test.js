import React from "react";
import PageNotFound from "../PageNotFound";

import { render } from "@testing-library/react";

import { BrowserRouter } from 'react-router-dom';

it("matches snapshot", () => {
  const { asFragment } = render(<BrowserRouter><PageNotFound /></BrowserRouter>);

  expect(asFragment()).toMatchSnapshot()
})