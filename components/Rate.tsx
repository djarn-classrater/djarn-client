import React from "react";

import { Chart } from "./Chart";

export const Rate = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ textAlign: "center", flex: "1"}}>
        <p style={{ margin: "1rem",marginBottom:"0",fontSize:"3.25rem" ,fontStyle: "normal"}}>4.2</p>
        <p style={{ marginTop: "-1rem",color:"#747474",fontSize: "0.875rem" }}>1000 reviewers</p>
      </div>
      <div style={{flex: "2", marginTop: "2rem"}}>
        <Chart />
      </div>
    </div>
  );
};
