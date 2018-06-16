import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleCompany, rebuildCompany, reloadApp } from '../../actions';

class TableBar extends Component {
    constructor(props) {
        super(props);
        this.handleCreateClick = this.handleCreateClick.bind(this);
        this.handleRebuildClick = this.handleRebuildClick.bind(this);
        this.handleReloadClick = this.handleReloadClick.bind(this);
    }

    handleRebuildClick() {
        this.props.toggleCompany();
        this.props.onRebuldClick();
    }

    handleCreateClick() {
        this.props.rebuildCompany(this.props.ids);
        this.props.onRebuldClick();
    }

    handleReloadClick() {
        this.props.reloadApp();
        this.props.onRebuldClick();
    }

    render() {
        const { isRebuildMode, ids } = this.props;
        const justify = (ids.length>0?'justify-between':'justify-end');
        return (
            <div className={'flex ' + justify + ' mb-2'}>
                {
                    ids.length>0&&
                    <button className="bg-grey-light hover:bg-grey text-grey-darkest py-2 px-4 rounded" 
                        onClick={this.handleCreateClick}>
                        <i className="fas fa-file-alt w-4 h-4 mr-2"></i>
                        <span className="text-sm">Create</span>
                    </button>
                }
                <div className="flex">
                    <button className="bg-grey-light hover:bg-grey text-grey-darkest py-2 px-4 rounded" 
                        onClick={this.handleRebuildClick }>
                        <i className="fas fa-clone w-4 h-4 mr-2"></i>
                        <span className="text-sm">{isRebuildMode?'Cancel':'Rebuild'}</span>
                    </button>
                    <button className="bg-red-lighter hover:bg-red-light text-grey-darkest py-2 px-4 ml-2 rounded"  
                        onClick={this.handleReloadClick} >
                        <i className="fas fa-sync-alt w-4 h-4 text-red-darkest text-sm"></i>
                    </button>
                </div>
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

export default connect(mapStateToProps, {toggleCompany, rebuildCompany, reloadApp})(TableBar);