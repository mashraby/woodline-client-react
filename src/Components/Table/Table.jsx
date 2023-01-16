import React from 'react';
import "./Table.css"
const Table = () => {
    return (
        <div className='container'>
            <div class="app-content">
                <div class="products-area-wrapper tableView">
                    <div class="products-header">
                        <div class="product-cell image t-center">
                            Id
                        </div>
                        <div class="product-cell image t-center">
                            Model
                        </div>
                        <div class="product-cell category t-center">
                            Delivery date
                        </div>
                        <div class="product-cell stock t-center">
                            Status
                        </div>
                    </div>

                    <div class="products-row">
                        <div class="product-cell">
                            <span>
                                Salom
                            </span>
                        </div>
                        <div class="product-cell">
                            <span>
                                Salom
                            </span>
                        </div>
                        <div class="product-cell"><span class="cell-label">Category:</span>
                            Salom
                        </div>
                        <div class="product-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status-accepted">Active</span>
                        </div>
                    </div>
                    <div class="products-row">
                        <div class="product-cell">
                            <span>
                                Salom
                            </span>
                        </div>
                        <div class="product-cell">
                            <span>
                                Salom
                            </span>
                        </div>
                        <div class="product-cell"><span class="cell-label">Category:</span>
                            Salom
                        </div>
                        <div class="product-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status-progress">In progress</span>
                        </div>
                    </div>
                    <div class="products-row">
                        <div class="product-cell">
                            <span>
                                Salom
                            </span>
                        </div>
                        <div class="product-cell">
                            <span>
                                Salom
                            </span>
                        </div>
                        <div class="product-cell"><span class="cell-label">Category:</span>
                            Salom
                        </div>
                        <div class="product-cell">
                            <span class="cell-label">Status:</span>
                            <span class="status-rejected">Rejected</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
