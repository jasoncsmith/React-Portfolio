import { useState, Dispatch } from 'react';

import Modal from '../components/Modal';

interface IUseModal {
    isVisible: boolean;
    toggleIsVisible: Dispatch<boolean>;
    Modal: any; // TODO: find out why ReactPortal | null doesnt work
}

function useModal(): IUseModal {
    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => setIsVisible(!isVisible);

    return {
        isVisible,
        toggleIsVisible,
        Modal,
    };
}

export default useModal;
