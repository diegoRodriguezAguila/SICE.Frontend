/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function (defaults) {
    return new Angular2App(defaults, {
        vendorNpmFiles: [
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'zone.js/dist/**/*.+(js|js.map)',
            'es6-shim/es6-shim.js',
            'reflect-metadata/**/*.+(js|js.map)',
            'rxjs/**/*.+(js|js.map)',
            '@angular/**/*.+(js|js.map)',
            'angular2-jwt/**/*.+(js|js.map)',
            '@angular2-material/**/*.js',
            'bootstrap-material-design/dist/**/*.+(js|css)',
            'angular2-moment/*.+(js|js.map)',
            'ng2-datetime/**/*.+(js|js.map|css)',
            'ng2-bootstrap/**/*.+(js|js.map)',
            'case-converter/**/*.+(js|js.map)'
        ]
    });
};
