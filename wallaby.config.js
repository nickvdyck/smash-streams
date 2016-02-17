module.exports = function(config) {
  return {
    files: [
      'src/*.ts',
    ],

    tests: [
      'test/**/*.spec.ts'
    ],

    compilers: {
      '**/*.ts': config.compilers.typeScript({ module: 1 })
    },
    
    env: {
        type: "node"
    },
    
    debug: true,
    
    bootstrap: function (wallaby) {
      var mocha = wallaby.testFramework;
      var chai = require('chai');
      
      mocha.ui('bdd');

      global.expect = chai.expect;

    }

  };
};
