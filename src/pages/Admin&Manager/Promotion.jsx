import React from 'react';
import './Promotions.css';

export default function Dashboard() {
    return (
        <div className="container">
            <div className="sidebar">
                <h2>Eternal Sparkle</h2>
                <div className="filter-group">
                    <h3>Status:</h3>
                    <div className="filter">
                        <input type="radio" id="activated-all" name="status" />
                        <label htmlFor="activated-all">Activated all</label>
                    </div>
                    <div className="filter">
                        <input type="radio" id="activating" name="status" />
                        <label htmlFor="activating">Activating</label>
                    </div>
                </div>
                <div className="filter-group">
                    <h3>Status:</h3>
                    <div className="filter">
                        <input type="radio" id="all" name="status2" />
                        <label htmlFor="all">All</label>
                    </div>
                    <div className="filter">
                        <input type="radio" id="hieu-luc" name="status2" />
                        <label htmlFor="hieu-luc">Hiệu lực</label>
                    </div>
                    <div className="filter">
                        <input type="radio" id="still-validated" name="status2" />
                        <label htmlFor="still-validated">Still validated</label>
                    </div>
                    <div className="filter">
                        <input type="radio" id="expired" name="status2" />
                        <label htmlFor="expired">Expired</label>
                    </div>
                </div>
                <button className="add-button">Add promotion</button>
            </div>
            <div className="main-content">
                <div className="search-bar">
                    <input type="text" placeholder="Find promotion" />
                </div>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Promotion Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Hình Thức</th>
                                <th>Status</th>
                                <th>Apply For</th>
                                <th>Quantity</th>
                                <th>Remaining</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Discount for gold membership</td>
                                <td>1/1/2024</td>
                                <td>31/1/2024</td>
                                <td>Online</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Gold member</td>
                            </tr>
                            <tr>
                                <td>Discount when order online</td>
                                <td>1/1/2024</td>
                                <td>31/1/2024</td>
                                <td>Online</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Unlimited</td>
                                <td>Gold member</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};