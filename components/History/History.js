import React, { Component } from 'react';
import './History.scss';

class History extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { companies } = this.props;
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
                            companies.valueSeq().map(item => 
                                <tr key={item.get('id')}>
                                    <td className="whitespace-no-wrap">
                                        <span className="text-purple-lighter">{item.get('companyName')}</span>
                                    </td>
                                    <td className="whitespace-pre">
                                        <span className="text-blue-lighter">{item.get('price')}</span>
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