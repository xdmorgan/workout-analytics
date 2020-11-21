import React from "react";
import { ContentHeader } from "../components/content-header";
import { Link } from "react-router-dom";

export const meta = {
  route: "/styleguide",
  title: "Styleguide",
  sidebar: null,
  component: Page,
  protected: false,
};

export function Page() {
  return (
    <>
      <ContentHeader>Styleguide</ContentHeader>
      <div className="container wysiwyg">
        <ul>
          <li>
            <Link to="/styleguide/buttons">Buttons</Link>
          </li>
          <li>Select Inputs</li>
        </ul>
      </div>
    </>
  );
}
