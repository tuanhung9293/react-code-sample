const theme = require('./src/theme');

module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        './src/**/*.tsx',
    ],
    theme: {
        screens: theme.screens,
        colors: theme.colors,
        extend: {
            textColor: {
                skin: theme.skin,
            },
            borderColor: {
                skin: theme.skin,
            },
            backgroundColor: {
                skin: theme.skin,
            }
        },
    },
    variants: {},
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@tailwindcss/forms'),
    ],
}