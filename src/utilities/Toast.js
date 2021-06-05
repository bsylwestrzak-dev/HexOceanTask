import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Toast {
    static toastMessage(message, option) {
        toast[option](message);
    }
}
