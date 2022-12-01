const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .react()
//     .sass('resources/sass/app.scss', 'public/css');

mix.js("resources/js/app.js", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [require("tailwindcss")])
    .js("resources/js/loginMetaMask.js", "public/js/loginMetaMask.js")
    .js("resources/js/react.js", "public/js/react.js")
    .js("resources/js/regM.js", "public/js/regM.js")
    .js("resources/js/contractInfo.js", "public/js/contractInfo.js")
    .js(
        "resources/js/driverFactoryAddress.js",
        "public/js/driverFactoryAddress.js"
    )
    .js(
        "resources/js/ticketFactoryAddress.js",
        "public/js/ticketFactoryAddress.js"
    )
    .js("resources/js/InfractionsAddress.js", "public/js/InfractionsAddress.js")
    .js(
        "resources/js/judgeFactoryAddress.js",
        "public/js/judgeFactoryAddress.js"
    )
    .js(
        "resources/js/policeFactoryAddress.js",
        "public/js/policeFactoryAddress.js"
    )
    .js(
        "resources/js/vehicleFactoryAddress.js",
        "public/js/vehicleFactoryAddress.js"
    );
