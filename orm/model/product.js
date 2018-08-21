const Sequlize = require('sequelize');
const sequlize = require('../sequelize');

let Product = sequlize.define('product', {
    id: {
        type: Sequlize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    title: Sequlize.STRING(100),
    session: Sequlize.STRING(100),
    releaseTime: Sequlize.BIGINT,
    introduction: Sequlize.STRING(10000),
    banner: {
        type: Sequlize.BOOLEAN,
        defaultValue: false
    },
    banner_rank: {
        type: Sequlize.BIGINT,
        defaultValue: 0
    }
}, {
    freezeTableName: true,
    timestamps: true
});

module.exports = Product;
