import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { add } from 'ionicons/icons'; 
import BreakActionItem from './BreakActionItem';

const PlusActionButton: React.FC = () => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
                <IonIcon icon={add} />
            </IonFabButton>

            <IonFabList side="top">
                <BreakActionItem></BreakActionItem>
            </IonFabList>
        </IonFab>
    );
};

export default PlusActionButton;
