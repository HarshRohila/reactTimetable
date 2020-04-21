import React from 'react';
import { IonFabButton, IonIcon } from '@ionic/react';
import './style.scss';

interface Params {
    label: string, 
    icon: string,
    showModal: Function
}
const ActionItem: React.FC<Params> = ( {label, icon, children, showModal} ) => {
    return (
    <IonFabButton 
        size="small" 
        color="secondary"
        data-desc={label}
        onClick={() => showModal()}>
        <IonIcon icon={icon} />
        {children}
    </IonFabButton>
)};

export default ActionItem;
