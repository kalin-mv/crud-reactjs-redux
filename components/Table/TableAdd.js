import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveCompany } from '../../actions';

class TableAdd extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            companyValid: true,
            companyName: '',
            priceValid: true,
            price: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleSave() {
        const companyValid = this.validate();
        if (companyValid) {
            const { companyName, price } = this.state;
            this.props.saveCompany({ companyName, price });
            this.setState({
                companyValid: true,
                companyName: '',
                priceValid: true,
                price: ''
            });
            this.props.onChange('saved');
        } 
    }
    
    handleClose() {
        this.setState({
            companyValid: true,
            companyName: '',
            priceValid: true,
            price: ''
            
        });
        this.props.onChange('closed');
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
            <tr className={this.props.visible?'':'hidden'}>
                <td className="whitespace-no-wrap"></td>
                <td className="whitespace-no-wrap">
                    <input className={companyBorder} type="text" name="companyName" 
                        value={ this.state.companyName } onChange={ this.handleChange }/>
                </td>
                <td className="whitespace-pre">
                    <input className={priceBorder} type="text" name="price" 
                        value={this.state.price} onChange={ this.handleChange } />
                </td>
                <td>
                    <div className="flex justify-around">
                        <i className="fas fa-check-circle text-grey hover:text-grey-darker" onClick={this.handleSave}/>
                        <i className="fas fa-times-circle text-grey hover:text-grey-darker" onClick={this.handleClose}></i>
                    </div>
                </td>
            </tr>            
        );
    }
}

TableAdd.propTypes = {
    visible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    saveCompany: PropTypes.func.isRequired,
};

export default connect(null, { saveCompany })(TableAdd);
