import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleCompany, rebuildCompany } from '../../actions';

class TableBar extends Component {

    handleRebuildClick() {
        this.props.toggleCompany();
        this.props.onRebuldClick();
    }

    handleCreateClick() {
        this.props.rebuildCompany(this.props.ids);
        this.props.onRebuldClick();
    }

    render() {
        const { isRebuildMode, ids } = this.props;
        const justify = (ids.length>0?'justify-between':'justify-end');
        return (
            <div className={'flex ' + justify + ' mb-2'}>
                {
                    ids.length>0&&
                    <button className="bg-grey-light hover:bg-grey text-grey-darkest py-2 px-4 rounded inline-flex items-center" 
                        onClick={this.handleCreateClick.bind(this)}>
                        <i className="fas fa-file-alt w-4 h-4 mr-2"></i>
                        <span className="text-sm">Create</span>
                    </button>
                }
                <button className="bg-grey-light hover:bg-grey text-grey-darkest py-2 px-4 rounded inline-flex items-center" 
                    onClick={this.handleRebuildClick.bind(this)}>
                    <i className="fas fa-clone w-4 h-4 mr-2"></i>
                    <span className="text-sm">{isRebuildMode?'Cancel':'Rebuild'}</span>
                </button>
            </div>
        );
    }
}

TableBar.propTypes = {
    ids: PropTypes.array.isRequired,
    onRebuldClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    const { toggleCompanies } = state; 
    return { ids:  toggleCompanies };
};

export default connect(mapStateToProps, {toggleCompany, rebuildCompany})(TableBar);