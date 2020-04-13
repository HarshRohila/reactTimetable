import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import ActionItem from './ActionItem/component';
import { add } from 'ionicons/icons'; 

const PlusActionButton: React.FC = () => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
                <IonIcon icon={add} />
            </IonFabButton>

            <IonFabList side="top">
                <ActionItem label="Break"/>
            </IonFabList>
        </IonFab>
    );
};

export default PlusActionButton;
