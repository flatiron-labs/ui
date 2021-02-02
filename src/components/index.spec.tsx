import React from "react";
import { Button } from "./Button/Button";
import { render, screen } from "@testing-library/react";

describe("component re-exporting", () => {
  const testId = "test-component";

  it("should render a Button", () => {
    render(<Button data-testid={testId} />);
    expect(screen.getByTestId(testId));
  });
});
