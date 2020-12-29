import ReactDOM from "react-dom";

jest.mock("react-dom", () => ({ hydrate: jest.fn() }));

describe("Application root", () => {
  it("should render", () => {
    require("./index.js");
    expect(ReactDOM.hydrate).toHaveBeenCalled();
  });
});