import React from "react";
import cx from "classnames";
import { Button } from "../components/button";
import { AppLayout } from "../layouts/app-layout";

function Grid({ style = {}, ...props }) {
  return (
    <div
      {...props}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "var(--space-3x",
        ...style,
      }}
    />
  );
}

function Label({ className, ...props }) {
  return <p {...props} className={cx("type-small", className)} />;
}

export function Page() {
  return (
    <AppLayout title="Styleguide">
      <div className="py-6x md:py-8x child-my-0">
        <h2 className="type-h1 my-4x">Buttons</h2>

        <div className="d-block mb-4x p-4x">
          <h3 className="type-h2">Appearances</h3>
          <Grid>
            <div className="child-my-0 p-2x">
              <Button>Button text</Button>
              <Label>default</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button disabled>Button text</Button>
              <Label>disabled</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button appearance="secondary">Button text</Button>
              <Label>secondary</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button appearance="ghost">Button text</Button>
              <Label>ghost</Label>
            </div>
          </Grid>
        </div>

        <div className="d-block mb-4x bg-n0 c-n90 p-4x">
          <h3 className="type-h2">Appearances</h3>
          <Grid>
            <div className="child-my-0 p-2x">
              <Button theme="dark">Button text</Button>
              <Label>default</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button theme="dark" disabled>
                Button text
              </Button>
              <Label>disabled</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button theme="dark" appearance="secondary">
                Button text
              </Button>
              <Label>secondary</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button theme="dark" appearance="ghost">
                Button text
              </Button>
              <Label>ghost</Label>
            </div>
          </Grid>
        </div>

        <div className="d-block mb-4x">
          <h3 className="type-h2">Sizes</h3>
          <Grid>
            <div className="child-my-0 p-2x">
              <Button size="small">Button text</Button>
              <Label>small</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button>Button text</Button>
              <Label>default</Label>
            </div>
            <div className="child-my-0 p-2x">
              <Button size="large">Button text</Button>
              <Label>large</Label>
            </div>
          </Grid>
        </div>
      </div>
    </AppLayout>
  );
}

export const meta = {
  route: "/styleguide",
  title: "Styleguide",
  sidebar: null,
  component: Page,
};
