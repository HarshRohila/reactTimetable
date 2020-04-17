import React, { useState } from 'react';
import { IonFabButton, IonIcon } from '@ionic/react';
import './style.scss';
import XModal from '../../XModal/component';

const ActionItem: React.FC<{ label: string, icon: string }> = ( {label, icon, children} ) => {

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
                {children}
            </XModal> : 
            false}
    </IonFabButton>
)};

export default ActionItem;
