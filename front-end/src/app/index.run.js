(function() {
  'use strict';

  angular
    .module('picoAnnotator')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
