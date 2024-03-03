
const getTheme = () => {
    const theme = localStorage.getItem('theme-games')
    return theme !== null ? JSON.parse(theme) : 'light'
}

export default getTheme