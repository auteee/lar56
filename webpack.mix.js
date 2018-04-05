let mix = require('laravel-mix');

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
mix.webpackConfig({
    module:{
        rules:[
            {
                test:/\.md$/,
                loaders:['html-loader']
            }
        ]
    }
});
// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');
//mix.sass('resources/assets/scss/bootstrap.scss' , 'public/css/aa.css');
//ezs
//mix.js('resources/assets/ezs/app.js','public/js/ezs.js');

//login
//mix.stylus('resources/assets/ezs/stylus/app.styl' , 'public/css/ezs.css');
//mix.js('resources/assets/admin/login/login.js','public/js/login.js');

//login admin
//mix.stylus('resources/assets/ezs/stylus/app.styl' , 'public/css/ezs.css');
mix.js('resources/assets/admin/app.js','public/js/admin.js');

