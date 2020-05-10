import React from "react";
import { Redirect } from "react-router-dom";
import { useProtectedPage } from "../hooks/use-protected-page";
import { usePageMeta } from "../hooks/use-page-meta";

export function ProtectedPage({ component: Component }) {
  const { nope, goto, transformed } = useProtectedPage();
  const meta = usePageMeta();
  if (nope || !Component) return <Redirect to={goto} />;
  return <Component allWorkoutData={transformed} pageMetadata={meta} />;
}
