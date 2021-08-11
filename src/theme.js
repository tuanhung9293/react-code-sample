module.exports = {
    screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
    },
    skin: {
        base: 'var(--color-text-base)',
        darker: 'var(--color-text-darker)',
        bg: 'var(--color-text-bg)',
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        gray300: '#D1D5DB',
        gray600: '#4B5563',
        red300: '#FCA5A5',
        red600: '#fb1111',
        red900: '#d61010',
    },
    // n: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64]
    spacing: (n) => `${n * 0.25}rem`,
}
