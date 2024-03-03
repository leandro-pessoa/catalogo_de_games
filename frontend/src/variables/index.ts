const variables = {
    // fontes
    primaryFont: "'Poppins', sans-serif",
    secondaryFont: "'Silkscreen', sans-serif",

    // cores
    white: '#fcfcfc',
    lightGray: '#d4d4d4',
    darkGray: '#2c2d31',
}

const flex = (
    direction: string = 'row',
    justify: string = 'auto',
    align: string = 'auto',
    gap: string = '0rem',
) => {
    return `
        display: flex;
        flex-direction: ${direction};
        justify-content: ${justify};
        align-items: ${align};
        gap: ${gap};
    `
}

export { variables, flex }
