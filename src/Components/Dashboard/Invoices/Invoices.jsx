import React from "react";
import Trophy from "../Trophy/Trophy";

const Invoices = ({ hasContent }) => {
  if (!hasContent) {
    return <Trophy />;
  }

  return (
    <div>
     
      <h1>Invoices Content</h1>
    </div>
  );
};

export default Invoices;
