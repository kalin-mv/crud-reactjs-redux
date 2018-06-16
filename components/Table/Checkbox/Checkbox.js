import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './prettycheckbox.scss';

import { toggleCompany } from '../../../actions';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
    }
    
    handleCheck(e) {
        this.props.toggleCompany(this.props.itemId, e.target.checked);
    }

    render() {
        const { itemId, ids } = this.props;
        return (
            <div className="pretty p-default">
                <input type="checkbox" onChange={this.handleCheck} defaultChecked={ids.includes(itemId)}/>
                <div className="state p-warning">
                    <label/>
                </div>
            </div>
        );
    }
}

Checkbox.propTypes = {
    ids: PropTypes.array.isRequired,
    itemId: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const { toggleCompanies } = state; 
    return { ids:  toggleCompanies };
};

export default connect(mapStateToProps, { toggleCompany })(Checkbox);