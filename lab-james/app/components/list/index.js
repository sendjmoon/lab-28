'use strict';

module.exports = function(app) {
  require('./list_directive')(app);
  require('./list_controller')(app);
};
