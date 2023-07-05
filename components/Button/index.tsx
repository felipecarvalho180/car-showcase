"use client";

import React, { MouseEventHandler } from "react";

interface Props {
  title: string;
  containerStyle?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ onClick, title, containerStyle }: Props) {
  return (
    <button
      disabled
      type="button"
      className={`custom-btn ${containerStyle}`}
      onClick={onClick}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
}

export default Button;
