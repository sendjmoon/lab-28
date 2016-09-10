'use strict';

module.exports = function(app) {
  require('./note_directive')(app);
  require('./note_controller')(app);
};
