import '../scss/style.scss';

import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Table from '../components/Table/Table';
import History from '../components/History/History';

import { loadCompaniesPage } from '../actions';
import { BUILD_SOLVED, BUILD_ACTIVE } from '../services/constants';

class Index extends Component {

    componentDidMount() {
        this.props.loadCompaniesPage();
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    // this.props.loadCompaniesPage();
    // }

    render() {
        const { companies, builds } = this.props;
        const isLoading = !companies || !builds;
        
        let list = [], history = [];
        if (!isLoading) {
            const b = _.find(builds, { status: BUILD_ACTIVE });
            list = _.filter(companies, {build: b.id});
            history = _.chain(builds)
                .filter(c => c.status == BUILD_SOLVED)
                .orderBy('updatedAt', 'desc')
                .map(o => _.filter(companies, { build: o.id })).value();
        }

        return (
            <Layout>
                <div className="bg-white border-l border-r rounded shadow mb-6">
                    <div className="border-b px-6 py-6 flex justify-center">
                        <Table isLoading={isLoading} companies={list} />
                    </div>
                </div>
                {
                    !isLoading && 
                    <div className="bg-grey-lightest border-l border-r rounded shadow mb-6">
                        <div className="border-b px-6 pt-6 flex flex-col items-center">
                            {
                                _.map(history, (item, i) =>  
                                    <div key={i} className="w-1/2 mb-6">
                                        <History companies={item}/>
                                    </div>
                                )
                            }
                        </div>  
                    </div>
                }
            </Layout> 
        );
    }
}

Index.propTypes = {
    loadCompaniesPage: PropTypes.func.isRequired,
    companies: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    const { entities: { companies, builds }} = state;   
    return { companies, builds };
};

export default connect(mapStateToProps, { loadCompaniesPage })(Index);
