'use strict';

module.exports = function(app) {
  require('./signup')(app);
  require('./signin')(app);
  require('./list')(app);
  require('./form')(app);
  require('./list-note')(app);
};
