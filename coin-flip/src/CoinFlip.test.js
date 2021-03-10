import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CoinFlip from "./CoinFlip";

beforeEach(function() {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

it("loads without crashing", function() {
  render(<CoinFlip />);
});

it("matches snapshot as heads", function() {
  const { asFragment } = render(<CoinFlip />);
  expect(asFragment()).toMatchSnapshot();
});

it("doesn't show coin when the page loads", function() {
  const { queryByText } = render(<CoinFlip />);
  
  // verify both sides of coin not on page
  expect(queryByText("Heads")).not.toBeInTheDocument();
  expect(queryByText("Tails")).not.toBeInTheDocument();
});

it("updates text correctly on heads", function() {
  const { queryByText } = render(<CoinFlip />);

  expect(queryByText("Out of 0 flips, there have been 0 heads and 0 tails."))
    .toBeInTheDocument();

  // click button to get heads
  const button = queryByText("FLIP MEEE");
  fireEvent.click(button);
  expect(queryByText("Out of 1 flips, there have been 1 heads and 0 tails."))
    .toBeInTheDocument();
});

it("updates text correctly on tails", function() {
  const { queryByText } = render(<CoinFlip />);

  expect(queryByText("Out of 0 flips, there have been 0 heads and 0 tails."))
    .toBeInTheDocument();

  // click button twice to get tails
  const button = queryByText("FLIP MEEE");
  fireEvent.click(button);
  fireEvent.click(button);
  expect(queryByText("Out of 2 flips, there have been 1 heads and 1 tails."))
    .toBeInTheDocument();
});

afterEach(function() {
  Math.random.mockRestore();
});