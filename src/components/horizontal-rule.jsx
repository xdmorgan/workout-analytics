import React from "react";

export function HorizontalRule(props) {
  return (
    <div {...props}>
      <hr
        style={{
          height: 1,
          width: "100%",
          background: "currentColor",
          margin: 0,
          padding: 0,
          outline: "none",
          border: "none",
        }}
      />
    </div>
  );
}
