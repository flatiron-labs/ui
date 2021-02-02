import React from "react";
import { render, screen } from "@testing-library/react";

import { Button } from "./Button";
import { Props } from "./Button.types";

describe("Button", () => {
  const testId = "test-component";

  const renderComponent = ({ ...props }: Props = {}) => {
    render(<Button data-testid={testId} {...props} />);
  };

  it("should render a primary button", () => {
    renderComponent({ primary: true });
    screen.getByTestId(testId);
  });

  it("should render a secondary button", () => {
    renderComponent();
    screen.getByTestId(testId);
  });

  it("should render children", () => {
    renderComponent({ children: "bar" });
    expect(screen.getByText("bar")).toBeInTheDocument();
  });
});
