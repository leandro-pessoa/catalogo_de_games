import { toast } from 'react-toastify'

const error = (msg: string) => {
    return toast.error(msg, {
        toastId: 0,
    })
}

const success = (msg: string) => {
    return toast.success(msg)
}

const warning = (msg: string) => {
    return toast.warning(msg)
}

export { error, success, warning }
