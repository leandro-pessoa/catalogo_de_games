// variáveis
import { variables } from "@/variables"

const lightTheme = {
    colors: {
        backgroundColor: variables.white,
        borderColor: variables.lightGray,
        fontColor: variables.darkGray
    }
}

const darkTheme = {
    colors: {
        backgroundColor: variables.darkGray,
        borderColor: variables.regularGray,
        fontColor: variables.white
    }
}

export { lightTheme, darkTheme }