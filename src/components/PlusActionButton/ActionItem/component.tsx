import React from 'react';
import { IonButton, IonText } from '@ionic/react';

const ActionItem: React.FC<{ label: string }> = ( {label} ) => {
    return (
        <IonButton size="small" color="secondary">
            <IonText color="light">
                <p>{label}</p>
            </IonText>
        </IonButton>
    );
};

export default ActionItem;
