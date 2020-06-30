let unit = require('./UnitMeasureRouter');
let contact = require('./ContactTypeRouter');
const api = '/api/';
module.exports = app => {
    app.use(api + 'unit', unit);
    app.use(api + 'contact', contact);
};