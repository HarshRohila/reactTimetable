import React, { useState } from 'react';
import { IonButton, IonText } from '@ionic/react';
import './style.scss';
import XModal from '../../XModal/component';
import BreaksForm from './BreaksForm';

const ActionItem: React.FC<{ label: string }> = ( {label} ) => {

    const [showModal, setShowModal] = useState(false);

    return (
    <IonButton size="small" color="secondary" onClick={() => setShowModal(true)}>
        <IonText color="light">
            <p>{label}</p>
        </IonText>
        {showModal ? 
            <XModal 
                closeModal={() => setShowModal(false)}>
                <BreaksForm></BreaksForm>
            </XModal> : 
            false}
    </IonButton>
)};

export default ActionItem;
