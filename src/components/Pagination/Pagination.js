import React from "react";
import ReactPaginate from "react-paginate";
import classes from "./Pagination.module.css";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      pageCount={info?.pages}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={pageNumber === 1? 0 : pageNumber - 1}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
    />
  );
};

export default Pagination;
