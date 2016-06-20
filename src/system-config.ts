/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map:any = {
    '@angular2-material': 'vendor/@angular2-material',
    'bootstrap-material-design': 'vendor/bootstrap-material-design',
};

/** User packages configuration. */
const packages:any = {};

// put the names of any of your Material components here
const materialPkgs:string[] = [
    'core',
    'toolbar',
    'button',
    'list',
    'card',
    'input',
    'progress-circle'
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
    'app/+home',
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
    packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({map, packages});
