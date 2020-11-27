import React from "react";
import PageNotFound from "../PageNotFound";

import { render } from "@testing-library/react";

xit("matches snapshot", () => {
  const { asFragment } = render(<PageNotFound />);

  expect(asFragment()).toMatchSnapshot();
})