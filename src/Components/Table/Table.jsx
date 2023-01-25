import React from "react";
import { useContext } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import "./Table.css";
const Table = ({ data }) => {
  const { header, body } = data;

  const { input, archiveOrders } = useContext(OpenModalContext);

  console.log(archiveOrders);

  return (
    <div className="container">
      <div className="app-content">
        <div className="products-area-wrapper tableView">
          <div className="products-header">
            {header &&
              header.map((e, i) => {
                return (
                  <div key={i + 1} className="product-cell image t-center">
                    {e}
                  </div>
                );
              })}
          </div>

          {archiveOrders
            ? body
                .filter((e) => e.status === "REJECTED")
                .map((e, i) => {
                  return (
                    <div key={i + 1} className="products-row">
                      <div className="product-cell">
                        <span>{e.id}</span>
                      </div>
                      <div className="product-cell">
                        <span>{e.model}</span>
                      </div>
                      <div className="product-cell">
                        <span className="cell-label">Category:</span>
                        {e.delevr_date || e.myprof}
                      </div>
                      <div className="product-cell">
                        <span className="cell-label">Status:</span>
                        <span className={"status-rejected"}>{e.status}</span>
                      </div>
                    </div>
                  );
                })
            : body && input === ""
            ? body.map((e, i) => {
                return (
                  <div key={i + 1} className="products-row">
                    <div className="product-cell">
                      <span>{e.id}</span>
                    </div>
                    <div className="product-cell">
                      <span>{e.model}</span>
                    </div>
                    <div className="product-cell">
                      <span className="cell-label">Category:</span>
                      {e.delevr_date || e.myprof}
                    </div>
                    <div className="product-cell">
                      <span className="cell-label">Status:</span>
                      <span
                        className={
                          e.status === "ACCEPTED"
                            ? "status-accepted"
                            : e.status === ("REJECTED" || "UNACCEPTED")
                            ? "status-rejected"
                            : "status-progress"
                        }
                      >
                        {e.status}
                      </span>
                    </div>
                  </div>
                );
              })
            : body
                .filter(
                  (e) =>
                    e.id.includes(input) ||
                    e.model.toLowerCase().includes(input.toLowerCase()) ||
                    e.delevr_date.toLowerCase().includes(input.toLowerCase()) ||
                    e.status.toLowerCase().includes(input.toLowerCase())
                )
                .map((e, i) => {
                  return (
                    <div key={i + 1} className="products-row">
                      <div className="product-cell">
                        <span>{e.id}</span>
                      </div>
                      <div className="product-cell">
                        <span>{e.model}</span>
                      </div>
                      <div className="product-cell">
                        <span className="cell-label">Category:</span>
                        {e.delevr_date}
                      </div>
                      <div className="product-cell">
                        <span className="cell-label">Status:</span>
                        <span
                          className={
                            e.status === "ACCEPTED"
                              ? "status-accepted"
                              : e.status === "REJECTED"
                              ? "status-rejected"
                              : "status-progress"
                          }
                        >
                          {e.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
        </div>
      </div>
    </div>
  );
};

export default Table;
