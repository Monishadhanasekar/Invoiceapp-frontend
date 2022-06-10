import React from "react";

const Front = () => {
  return (
    <div style={{backgroundColor: "lightgray"}}>
      <div className="p-md-5 p-2 py-5 my-5 signup-background container shadow justify-content-center">
        <div className="p-md-5 p-3 ">
          <div className="text-md-end display-2">Welcome to InvoiceApp</div>
        </div>
        <div className="p-md-5 p-3 ">
          <div className="lead text-md-end display-6 fst-italic fs-1 text-muted">
            A Hassle-Free Invoice Generator...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Front;
