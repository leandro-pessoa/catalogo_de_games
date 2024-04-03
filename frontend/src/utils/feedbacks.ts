import { toast } from 'react-toastify'

const error = (msg: string) => {
    return toast.error(msg, {
        toastId: 0,
    })
}

const success = (msg: string) => {
    return toast.success(msg, {
        toastId: 1
    })
}

const update = (msg: string) => {
    return toast.update(1, {
        render: msg
    })
}

const warning = (msg: string) => {
    return toast.warning(msg)
}

export { error, success, update, warning }
