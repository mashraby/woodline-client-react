import React from "react";
import { useContext } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import "./Table.css";
const Table = ({ data }) => {
  const { header, body } = data;

  const { input } = useContext(OpenModalContext);

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
            {/* <div className="product-cell image t-center">Model</div>
            <div className="product-cell category t-center">Delivery date</div>
            <div className="product-cell stock t-center">Status</div> */}
          </div>

          {body && input === ""
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
          {/* <div className="products-row">
            <div className="product-cell">
              <span>358832</span>
            </div>
            <div className="product-cell">
              <span>Zo'r Model</span>
            </div>
            <div className="product-cell">
              <span className="cell-label">Category:</span>
              Salom
            </div>
            <div className="product-cell">
              <span className="cell-label">Status:</span>
              <span className="status-progress">In progress</span>
            </div>
          </div> */}
          {/* <div className="products-row">
            <div className="product-cell">
              <span>358832</span>
            </div>
            <div className="product-cell">
              <span>Salom</span>
            </div>
            <div className="product-cell">
              <span className="cell-label">Category:</span>
              Salom
            </div>
            <div className="product-cell">
              <span className="cell-label">Status:</span>
              <span className="status-rejected">Rejected</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Table;
