// variáveis
import { variables } from '@/variables'

const lightTheme = {
    colors: {
        backgroundColor: variables.white,
        borderColor: variables.lightGray,
        fontColor: variables.darkGray,
        calendarPicker: '',
    },
}

const darkTheme = {
    colors: {
        backgroundColor: variables.darkGray,
        borderColor: variables.regularGray,
        fontColor: variables.white,
        calendarPicker: 'invert(1)',
    },
}

export { lightTheme, darkTheme }
