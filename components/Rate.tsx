import React from "react";

import { Chart } from "./Chart";

export const Rate = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ textAlign: "center", flex: "1"}}>
        <h1 style={{ marginBottom: "1px" }}>4.2</h1>
        <p style={{ margin: "1px" }}>1000 reviewer</p>
      </div>
      <div style={{flex: "2", marginTop: "1rem"}}>
        <Chart />
      </div>
    </div>
  );
};
