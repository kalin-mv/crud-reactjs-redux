const express = require('express');
const _ = require('lodash') ;
const lg = require('minilog')('server');
const faker = require('faker');
const { BUILD_SOLVED, BUILD_ACTIVE } = require('./constants');

const router = express.Router();

const builds = _.times(2, i => {
    return {
        id: _.uniqueId(),
        status: i <= 0?BUILD_ACTIVE:BUILD_SOLVED,
        updatedAt: Date.now()
    };
});

const companies = [];
_.map(builds, b => _.times(5, () => {
    companies.push({
        id: _.uniqueId(),
        build: b.id,
        companyName : faker.company.companyName(),
        price: faker.finance.amount(),
    });
}));

router.get('/companies', (req, res) => {
    const list = _.map(companies, o => ({
        ...o,
        build: _.find(builds, {id: o.build})
    }));
    res.json(list);
});

router.post('/companies', (req, res) => {
    let items = req.body;
    items = _.isArray(items)?items:[ items ];
    const activeBuild = _.find(builds, {status: BUILD_ACTIVE});
    const result = _.map(items, o => {
        const item = {
            ...o,
            build: activeBuild.id,
            id: _.uniqueId(),
        };
        companies.push(item);
        return item;
    });
    res.json(result);
});

router.put('/companies', (req, res) => {
    let items = req.body;
    items = _.isArray(items)?items:[ items ];
    const result = _.map(items, o => 
        _.chain(companies)
            .find({'id': o.id})
            .merge(o)
    );
    res.json(result);
});

router.delete('/companies', (req, res) => {
    const { id } = req.body;
    _.remove(companies, (o) => o.id == id);
    res.json({ id });
});

router.post('/build', (req, res) => {
    let items = req.body;
    items = _.isArray(items)?items:[ items ];
    const result = _.map(items, o => {
        const item = {
            id: _.uniqueId(),
            status: o.status,
            updatedAt: Date.now()
        };
        builds.push(item);
        return item;
    });
    res.json(result);
});

router.put('/build', (req, res) => {
    let items = req.body;
    items = _.isArray(items)?items:[ items ];
    const result = _.map(items, o => 
        _.chain(builds)
            .find({'id': o.id})
            .merge({ ...o, updatedAt: Date.now()})
            .value()
    );
    res.json(result);
});

module.exports = router;