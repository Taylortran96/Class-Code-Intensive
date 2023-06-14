import React from "react";

const Pagination = ({ gotoNextPage, gotoPreviousPage }) => {
  return (
    <div>
      {gotoPreviousPage && <button onClick={gotoPreviousPage}>previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
