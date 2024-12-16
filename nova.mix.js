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
            '@inertiajs/inertia': 'Inertia',
            '@/fields': 'LaravelNova',
            '@/components': 'LaravelNova',
            '@/mixins': 'LaravelNova',
            '@/util': 'LaravelNova',
            'laravel-nova': 'LaravelNova'
        }

        webpackConfig.resolve = {
            alias: {
                '@': path.resolve(__dirname, 'resources/js/'),
            }
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