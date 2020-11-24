import React from "react";
import { render } from "@testing-library/react";
import { AppLayout } from "./app-layout";

test("renders <AppLayout /> with required props", () => {
  const text = {
    sidebar: "sidebar",
    children: "content",
  };

  const { getByText } = render(
    <AppLayout sidebar={<div>{text.sidebar}</div>}>
      <div>{text.children}</div>
    </AppLayout>
  );

  expect(getByText(text.sidebar)).toBeInTheDocument();
  expect(getByText(text.children)).toBeInTheDocument();
});
