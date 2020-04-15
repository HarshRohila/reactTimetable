import React, { useEffect, ReactNode } from 'react';
import './style.scss';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
const modalParent = document.createElement('div');

const XModal: React.FC<{closeModal: Function, children: ReactNode}> = ({ children, closeModal }) => {

    const onClick = function(this: any,  e: MouseEvent ) { 
        if (this === e.target) closeModal();
    }

    useEffect(() => {
        rootElement?.appendChild(modalParent);

        modalParent.addEventListener('click', onClick, false);

        return () => {
            rootElement?.removeChild(modalParent);
            modalParent.removeEventListener('click', onClick, false);
        }
    }, []);

    return ReactDOM.createPortal(
        children,
        modalParent
    );
};

export default XModal;
