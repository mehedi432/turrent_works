import React, { Component } from 'react'
import "./orderlist.css";

export default class OrderList extends Component {
    render() {
        return (
            <div>
                <div className="card order-list centered-components">
                    <div>
                        <h4 className=""><strong>My Orders</strong></h4>
                    </div>
                </div>
                <div className="container responsive-table">
                    <div className="card">
                        <table className="centered">
                            <thead>
                            <tr>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Order Number</th>
                                <th>Total</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>Cancelled</td>
                                <td>Firday, 06, 2019</td>
                                <td>10:30</td>
                                <td>1001</td>
                                <td>500$</td>
                            </tr>
                            <tr>
                                <td>Cancelled</td>
                                <td>Firday, 06, 2019</td>
                                <td>10:30</td>
                                <td>1001</td>
                                <td>500$</td>
                            </tr>
                            <tr>
                                <td>Cancelled</td>
                                <td>Firday, 06, 2019</td>
                                <td>10:30</td>
                                <td>1001</td>
                                <td>500$</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>            
            </div>
        )
    }
}
