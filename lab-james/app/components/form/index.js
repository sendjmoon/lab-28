'use strict';

module.exports = function(app) {
  require('./form_directive')(app);
  require('./form_controller')(app);
};
