import React from "react";
import { render } from "@testing-library/react";
import Coin from "./Coin";

it("loads as heads without crashing", function() {
  render(<Coin side="h" />);
});

it("loads as tails without crashing", function() {
  render(<Coin side="t" />);
});

it("matches snapshot as heads", function() {
  const { asFragment } = render(<Coin side="h" />);
  expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot as tails", function() {
  const { asFragment } = render(<Coin side="h" />);
  expect(asFragment()).toMatchSnapshot();
});