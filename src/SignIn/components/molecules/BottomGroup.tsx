import React from "react";
import CheckBox, { CheckBoxProps } from "../atom/CheckBox";
import LinkP, { LinkProps } from "../atom/LinkP";
import { CSSProperties } from "react";
import { SIZES } from "../../../css/root";

type BottomGroupProps = {
  textC: CheckBoxProps;
  textP?: LinkProps;
};

const BottomGroup = ({ textP, textC }: BottomGroupProps) => {
  const style: CSSProperties = {
    display: "flex",
    maxWidth: "400px",
    margin: "0 auto",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: SIZES.FONT_SIZE.EXTRA_SMALL,
  };

  return (
    <div style={style}>
      <CheckBox {...textC} />
      {textP && <LinkP {...textP} />}
    </div>
  );
};

export default BottomGroup;
