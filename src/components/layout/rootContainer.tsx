import React from "react";
import Nav from "./nav";
import Footer from "./footer";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootContainer = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default RootContainer;
