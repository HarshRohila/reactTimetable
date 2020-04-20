import React, { useState } from 'react';
import { IonFabButton, IonIcon } from '@ionic/react';
import './style.scss';
import XModal from '../../XModal/component';
import ModalCard from '../ModalCards/ModalCard';

interface Params {
    label: string, 
    icon: string,
    title: string
}
const ActionItem: React.FC<Params> = ( {label, icon, children, title} ) => {

    const [showModal, setShowModal] = useState(false);

    return (
    <IonFabButton 
        size="small" 
        color="secondary"
        data-desc={label}
        onClick={() => setShowModal(true)}>
        <IonIcon icon={icon} />
        {showModal ? 
            <XModal 
                closeModal={() => setShowModal(false)}>
                <ModalCard title={title}>
                    {children}
                </ModalCard>
            </XModal> : 
            false}
    </IonFabButton>
)};

export default ActionItem;
