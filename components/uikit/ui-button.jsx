import clsx from "clsx";
import React from "react";

/**
 * @param {{
 * children: React.ReactNode,
 * className: 'blue__button' | 'white__button',
 * padding: React.CSSProperties['padding'] | string | number,
 * size: React.CSSProperties['fontSize'] | string | number
 * }} props
 */
export function UiButton({ children, className, padding, size }) {
  return (
    <button className={clsx(className)} style={{ padding, fontSize: size }}>
      {children}
    </button>
  );
}
