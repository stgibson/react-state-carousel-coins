import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

it("loads without crashing", function() {
  render(
    <Card
      caption="test-caption"
      src={ image1 }
      currNum={ 1 }
      totalNum={ 2 }
    />
  );
});

it("matches snapshot", function() {
  const { asFragment } = render(
    <Card
      caption="test-caption"
      src={ image1 }
      currNum={ 1 }
      totalNum={ 2 }
    />
  );
  expect(asFragment()).toMatchSnapshot();
});