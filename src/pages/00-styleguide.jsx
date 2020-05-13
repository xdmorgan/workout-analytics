import React from "react";
import { AppLayout } from "../layouts/app-layout";
import { ButtonStyleguide } from "../components/button-styleguide";
import { SelectInputStyleguide } from "../components/select-input-styleguide";

export const meta = {
  route: "/styleguide",
  title: "Styleguide",
  sidebar: null,
  component: Page,
};

export function Page() {
  return (
    <AppLayout title="Styleguide">
      <ButtonStyleguide />
      <SelectInputStyleguide />
    </AppLayout>
  );
}
