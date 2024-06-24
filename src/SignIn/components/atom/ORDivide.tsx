import React from "react";
import { CSSProperties } from "react";

const ORDivide = () => {
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "20px 0",
  };

  const lineStyle: CSSProperties = {
    flexGrow: 1,
    height: "1px",
    backgroundColor: "#d1d1d1",
  };

  const orStyle: CSSProperties = {
    margin: "0 10px",
    color: "#d1d1d1",
    fontWeight: "bold",
    border: "1px solid #d1d1d1",
    borderRadius: "10px",
    padding: "10px 40px",
  };

  return (
    <div style={style}>
      <div style={lineStyle} />
      <span style={orStyle}>OR</span>
      <div style={lineStyle} />
    </div>
  );
};

export default ORDivide;
