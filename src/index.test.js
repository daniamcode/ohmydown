import ReactDOM from "react-dom";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render", () => {
    require("./index.js");
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});