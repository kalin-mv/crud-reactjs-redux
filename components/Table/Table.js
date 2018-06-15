import React, { Component } from 'react';

import TableRow from './TableRow';
import TableAdd from './TableAdd';
import TableBar from './TableBar';

import './Table.scss';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { addVisible : false, isRebuildMode : false };
        this.handleRebuildClick = this.handleRebuildClick.bind(this);
        this.handleAddRow = this.handleAddRow.bind(this);
        this.handleAddChanged = this.handleAddChanged.bind(this);
    }

    handleAddRow() {
        this.setState({ addVisible : !this.state.addVisible });
    }

    handleAddChanged() {
        this.setState({ addVisible : false });
    }

    handleRebuildClick() {
        this.setState({isRebuildMode : !this.state.isRebuildMode });
    }

    render() {
        const { companies, isLoading } = this.props;
        return (
            <div className="w-1/2">
                <TableBar onRebuldClick={this.handleRebuildClick} isRebuildMode = {this.state.isRebuildMode}/>
                <div className=" border border-grey-light rounded">
                    <table className="w-full text-left table-main">
                        <thead>
                            <TableHead onHandleClick={this.handleAddRow}/>
                        </thead>
                        <tbody>
                            {isLoading? <TableLoading/> :companies.valueSeq().map(item => 
                                <TableRow key={item.get('id')} item={item} isRebuildMode = {this.state.isRebuildMode}/> 
                            )}
                            <TableAdd visible={this.state.addVisible} onChange={this.handleAddChanged}/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const TableHead = ({onHandleClick}) => (
    <tr>
        <th className="w-1 rounded"></th>
        <th>Item</th>
        <th className="w-1/5">Cost lb/kg</th>
        <th className=  "w-1/6 rounded">
            <button 
                className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-1 px-4 border border-blue hover:border-transparent rounded"
                onClick={onHandleClick}>
                + row
            </button>
        </th>
    </tr>
);

const TableLoading = () => (
    <tr>
        <td colSpan="4">
            <div className="flex justify-center items-center">
                <div className="fa-3x">
                    <i className="fas fa-spinner fa-xs fa-spin"></i>
                </div>
                <p className="text-lg ml-2">Loading</p>
            </div>
        </td>
    </tr>
);

export default Table;