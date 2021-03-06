/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
    '@angular2-material': 'vendor/@angular2-material',
    'bootstrap-material-design': 'vendor/bootstrap-material-design',
    'angular2-moment': 'vendor/angular2-moment',
    'ng2-datetime': 'vendor/ng2-datetime',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
    'case-converter': 'vendor/case-converter'

};

/** User packages configuration. */
const packages:any = {
    'angular2-moment': { main: 'index.js', defaultExtension: 'js' },
    'ng2-datetime': {  main: 'ng2-datetime.js', defaultExtension: 'js'},
    'ng2-bootstrap': {  main: 'ng2-bootstrap.js', defaultExtension: 'js'},
    'case-converter': { defaultExtension: 'js'}
};

/** User paths configuration */
const paths:any = {
    'moment': "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.12.0/moment-with-locales.js",
};
// put the names of any of your Material components here
const materialPkgs:string[] = [
    'core',
    'toolbar',
    'button',
    'list',
    'card',
    'input',
    'progress-circle',
    'icon'
];


materialPkgs.forEach((pkg) => {
    packages[`@angular2-material/${pkg}`] = {main: `${pkg}.js`};
});

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels:string[] = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',

    // Thirdparty barrels.
    'rxjs',
    'angular2-jwt',

    // App specific barrels.
    'app',
    'app/shared',
    'app/+login',
    'app/+outages',
/** @cli-barrel */
];

const cliSystemConfigPackages:any = {};
barrels.forEach((barrelName:string) => {
    cliSystemConfigPackages[barrelName] = {main: 'index'};
});

/** Type declaration for ambient System. */
declare var System:any;

// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'angular2-jwt': 'vendor/angular2-jwt',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages,
    paths: paths,
    meta: {
        'moment': {
            format: 'global'
        }
    }
});

// Apply the user's configuration.
System.config({map, packages});
