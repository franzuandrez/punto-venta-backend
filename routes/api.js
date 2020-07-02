let unit = require('./api/UnitMeasureRouter');
let contact = require('./api/ContactTypeRouter');
const api = '/api/';
module.exports = app => {
    app.use(api + 'unit', unit);
    app.use(api + 'contact', contact);
};