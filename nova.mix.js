const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

class NovaExtension {
    name() {
        return 'nova'
    }

    register(name) {
        this.name = name
    }

    webpackConfig(webpackConfig) {
        webpackConfig.externals = {
            vue: 'Vue',
            'laravel-nova': 'LaravelNova'
        }

        webpackConfig.output = {
            uniqueName: this.name,
        }
    }

    webpackPlugins() {
        return [
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: false,
            })
        ]
    }
}

mix.extend('nova', new NovaExtension())