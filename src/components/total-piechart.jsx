import React from "react";
import { ResponsivePie } from "@nivo/pie";
import cx from "classnames";
import styles from "./total-piechart.module.scss";

export function TotalPiechart({ data, children, ...props }) {
  return (
    <div className={styles.grid}>
      <div className={cx(styles.grid__description, "child-my-0")}>
        {children}
      </div>
      <div
        className={cx(styles.grid__chart, "d-none md:d-flex flx-a-c flx-j-c")}
      >
        <div style={{ width: 360, height: 360 }}>
          <ResponsivePie
            data={data}
            enableRadialLabels={false}
            innerRadius={0.5}
            margin={{ bottom: 48 }}
            legends={[
              {
                anchor: "bottom",
                direction: "row",
                translateY: 48,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: "var(--color-n0)",
                symbolSize: 18,
                symbolShape: "circle",
              },
            ]}
            {...props}
          />
        </div>
      </div>
    </div>
  );
}
