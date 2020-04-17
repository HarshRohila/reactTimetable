import React, { useState } from 'react';
import { IonFabButton, IonIcon } from '@ionic/react';
import './style.scss';
import XModal from '../../XModal/component';
import BreaksForm from './BreaksForm';

const ActionItem: React.FC<{ label: string, icon: string }> = ( {label, icon} ) => {

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
                <BreaksForm></BreaksForm>
            </XModal> : 
            false}
    </IonFabButton>
)};

export default ActionItem;
