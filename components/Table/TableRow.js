import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveCompany,  deleteCompany } from '../../actions';

import Checkbox from './Checkbox/Checkbox';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isEdit : false,
            companyValid: true,
            companyName: this.props.item.companyName,
            priceValid: true,
            price: this.props.item.price,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleEdit() {
        this.setState({ isEdit: true });
    }

    handleDelete() {
        this.props.deleteCompany(this.props.item.id);
    }

    handleSave() {
        const companyValid = this.validate();
        if (companyValid) {
            const { companyName, price } = this.state;
            this.props.saveCompany({ 
                id: this.props.item.id, 
                companyName, 
                price: parseFloat(price) 
            });
            this.setState({ isEdit: false });
        }
    }

    handleChange(e) {
        switch (e.target.name) {
        case 'companyName':
            this.setState({ companyName: e.target.value });
            break;
        case 'price':
            this.setState({ price: e.target.value });
            break;
        }
    }

    validate() {
        const companyValid = /^[A-Za-z\s\., '-]+$/.test(this.state.companyName);
        const priceValid = /^[0-9.,]+$/.test(this.state.price);
        this.setState({companyValid, priceValid});
        return companyValid && priceValid;
    }

    render() {
        const companyBorder = this.state.companyValid?'active text-purple-dark':'error text-purple-dark';
        const priceBorder = this.state.priceValid?'active text-blue-dark':'error text-blue-dark';
        return (
            <tr>
                <td className="whitespace-no-wrap">
                    {
                        this.props.isRebuildMode && <Checkbox itemId={this.props.item.id}/>
                    }
                </td>
                <td className="whitespace-no-wrap">
                    {
                        this.state.isEdit?
                            <input className={companyBorder} type="text" name="companyName" 
                                value={ this.state.companyName } onChange={ this.handleChange }/>:
                            <span className="text-purple-dark">{this.state.companyName}</span>
                    }
                </td>
                <td className="whitespace-pre">
                    {
                        this.state.isEdit?
                            <input className={priceBorder} type="text" name="price" 
                                value={this.state.price} onChange={ this.handleChange } />:
                            <span className="text-blue-dark">{this.state.price}</span>
                    }
                </td>
                <td>
                    <div className="flex justify-around">
                        {
                            this.state.isEdit?
                                <i className="fas fa-check-circle text-grey hover:text-grey-darker" onClick={this.handleSave.bind(this)}/>:
                                <i className="fas fa-edit text-grey hover:text-grey-darker" onClick={this.handleEdit.bind(this)}></i>
                                
                        }
                        <i className="fas fa-trash-alt text-grey hover:text-grey-darker" onClick={this.handleDelete.bind(this)}></i>
                    </div>
                </td>
            </tr>            
        );
    }
}

TableRow.propTypes = {
    deleteCompany: PropTypes.func.isRequired,
    saveCompany: PropTypes.func.isRequired,
};

export default connect(null, { saveCompany, deleteCompany })(TableRow);
