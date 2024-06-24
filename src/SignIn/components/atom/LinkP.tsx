import React, { CSSProperties } from "react";
import { SIZES } from "../../../css/root";

export type LinkProps = {
  text: string;
};

const LinkP = ({ text }: LinkProps) => {
  const style: CSSProperties = {
    fontSize: SIZES.FONT_SIZE.EXTRA_SMALL,
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      <a href="/">{text}</a>
    </div>
  );
};

export default LinkP;
