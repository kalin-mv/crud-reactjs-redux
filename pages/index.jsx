import '../scss/style.scss';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import Layout from '../components/Layout';
import Table from '../components/Table/Table';
import History from '../components/History/History';

import { loadCompaniesPage } from '../actions';
import { BUILD_SOLVED, BUILD_ACTIVE } from '../services/constants';

class Index extends PureComponent {

    componentDidMount() {
        const { loadCompaniesPage } = this.props;
        loadCompaniesPage();
    }

    render() {
        const { companies, builds } = this.props;
        const isLoading = companies.size <= 0 || builds.size <= 0;
        let list = Map();
        let history = List();
        if (!isLoading) {
            const b = builds.find(o => o.get('status') === BUILD_ACTIVE);
            list = companies
                .filter(c => c.get('build') === b.get('id'))
                .sortBy(c => parseInt(c.get('id')));
            builds
                .filter(c => c.get('status') === BUILD_SOLVED)
                .sortBy(c => -parseInt(c.get('updatedAt')))
                .map(o => {
                    const c = companies.filter(cc => cc.get('build') === o.get('id'));
                    history = history.push(c);
                });
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
                                history.valueSeq().map((item, i) =>  
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
    builds: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const { entities } = state;
    return {
        companies: entities.get('companies'),
        builds: entities.get('builds'),
    };
};

export default connect(mapStateToProps, { loadCompaniesPage })(Index);
