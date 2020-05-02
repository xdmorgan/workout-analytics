import React from "react";
import { Button } from "../components/button";

export default function Page() {
  return (
    <div>
      <div className="mt-10x">
        <div className="d-block mb-4x">
          <Button>Analyze my workouts</Button>
          <Button disabled>Analyze my workouts</Button>
          <Button appearance="secondary">Analyze my workouts</Button>
          <Button appearance="negative">Analyze my workouts</Button>
          <Button appearance="ghost-light">Analyze my workouts</Button>
          <Button appearance="ghost-dark">Analyze my workouts</Button>
        </div>
      </div>
    </div>
  );
}

export const meta = {
  route: "/styleguide",
  title: "Styleguide",
  component: Page,
};
