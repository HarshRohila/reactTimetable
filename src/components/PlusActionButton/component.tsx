import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import ActionItem from './ActionItem/component';
import { add, timeOutline, pauseCircleOutline } from 'ionicons/icons'; 
import BreaksForm from './BreaksForm';

const PlusActionButton: React.FC = () => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
                <IonIcon icon={add} />
            </IonFabButton>

            <IonFabList side="top">
                <ActionItem label="Break" icon={pauseCircleOutline}>
                    <BreaksForm></BreaksForm>
                </ActionItem>
                <ActionItem label="Working Hours" icon={timeOutline} />
            </IonFabList>
        </IonFab>
    );
};

export default PlusActionButton;
