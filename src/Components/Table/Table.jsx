import React from "react";
import "./Table.css";
const Table = () => {
  return (
    <div className="container">
      <div className="app-content">
        <div className="products-area-wrapper tableView">
          <div className="products-header">
            <div className="product-cell image t-center">Id</div>
            <div className="product-cell image t-center">Model</div>
            <div className="product-cell category t-center">Delivery date</div>
            <div className="product-cell stock t-center">Status</div>
          </div>

          <div className="products-row">
            <div className="product-cell">
              <span>Salom</span>
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
              <span className="status-accepted">Active</span>
            </div>
          </div>
          <div className="products-row">
            <div className="product-cell">
              <span>Salom</span>
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
              <span className="status-progress">In progress</span>
            </div>
          </div>
          <div className="products-row">
            <div className="product-cell">
              <span>Salom</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
