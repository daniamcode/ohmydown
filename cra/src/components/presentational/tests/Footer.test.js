import React from "react";
import Footer from "../Footer";

import { render } from "@testing-library/react";

it("matches snapshot", () => {
  const { asFragment } = render(<Footer />);

  expect(asFragment()).toMatchSnapshot();
});