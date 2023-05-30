import { useState } from "react";

import Modal from '../components/modal.js';

function useModal() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => setIsVisible(!isVisible);

    return {
        isVisible,
        toggleIsVisible,
        Modal
    }
}

export default useModal;