"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps =
  | {
      children: ReactNode;
      onClick: () => void;
      href?: never;
      inNewWindow?: never;
      className?: string;
    }
  | {
      children: ReactNode;
      onClick?: never;
      href: string;
      inNewWindow?: boolean;
      className?: string;
    };

const Button = ({
  children,
  className,
  onClick,
  inNewWindow,
  href,
}: ButtonProps) => {
  const buttonStyles = clsx(
    "font-mono w-full text-base md:text-lg whitespace-nowrap button text-black/60 p-4 text-center rounded-full",
    className
  );
  return href ? (
    <Link
      href={href}
      target={inNewWindow ? "_blank" : "_self"}
      rel="noreferrer"
      className={buttonStyles}
    >
      {children}
    </Link>
  ) : (
    <button type="button" className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
