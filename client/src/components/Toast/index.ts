import { toast, ToastOptions } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const DEFAULT_OPTIONS: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  theme: 'dark',
}

const success = (message: string) => toast.success(message, DEFAULT_OPTIONS)
const error = (message: string) => toast.error(message, DEFAULT_OPTIONS)
const warning = (message: string) => toast.warning(message, DEFAULT_OPTIONS)
const info = (message: string) => toast(message, DEFAULT_OPTIONS)

const exp = {
  success,
  error,
  warning,
  info,
}

export default exp
