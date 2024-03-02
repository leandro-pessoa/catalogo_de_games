const variables = {}

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
