import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Profile from "../Profile";

xdescribe("Profile component", () => {
  const mockChangeValue = jest.fn();
  const stubbedSearchValue = {
    url: ""
  };

  xit("shows all required input fields with empty values", () => {
    const { getByTestId } = render(
      <Profile
        searchValue={stubbedSearchValue}
        handleChangeValue={mockChangeValue}
      />
    );

    expect(getByTestId("filled-basic").value).toBe("");
  });
})