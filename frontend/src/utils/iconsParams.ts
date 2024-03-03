// variáveis
import { variables } from "@/variables"

const iconsParams = (theme: string) => {
    return {
        size: 26,
        color: theme === 'light' ? variables.darkGray : '#fff'
    }
}

export default iconsParams