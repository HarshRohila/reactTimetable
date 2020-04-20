import React, { useState } from 'react';
import { IonFabButton, IonIcon, IonCard, IonCardContent, IonHeader, IonTitle } from '@ionic/react';
import './style.scss';
import XModal from '../../XModal/component';

interface Params {
    label: string, 
    icon: string,
    title: string
}
const ActionItem: React.FC<Params> = ( {label, icon, children, title} ) => {

    const [showModal, setShowModal] = useState(false);

    const modalCard = (
        <IonCard>
            <IonCardContent>
                <IonHeader>
                    <IonTitle>{title}</IonTitle>
                </IonHeader>
                {children}
            </IonCardContent>
        </IonCard>
    );

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
                {modalCard}
            </XModal> : 
            false}
    </IonFabButton>
)};

export default ActionItem;
