import _ from 'lodash';
import React, { Component } from 'react';
import './History.scss';

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="border border-grey-light rounded">
                <table className="w-full text-left table-history">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th className="w-1/5">Cost lb/kg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            _.map(this.props.companies, (item) => 
                                <tr key={item.id}>
                                    <td className="whitespace-no-wrap">
                                        <span className="text-purple-lighter">{item.companyName}</span>
                                    </td>
                                    <td className="whitespace-pre">
                                        <span className="text-blue-lighter">{item.price}</span>
                                    </td>
                                </tr>                     
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default History;