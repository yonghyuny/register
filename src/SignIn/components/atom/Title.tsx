import React from "react";
import { CSSProperties } from "react";
import { COLORS, SIZES } from "../../../css/root";

export type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  const style: CSSProperties = {
    color: COLORS.PRIMARY,
    fontSize: SIZES.FONT_SIZE.EXTRA_LARGE,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px 0",
  };

  const spanStyle: CSSProperties = {
    fontSize: SIZES.FONT_SIZE.EXTRA_SMALL,
    color: "#666",
  };

  return (
    <div style={style}>
      {title}
      <span style={spanStyle}>Enter your credentials to continue</span>
    </div>
  );
};

export default Title;
