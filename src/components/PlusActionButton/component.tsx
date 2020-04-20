import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import ActionItem from './ActionItem/component';
import { add, timeOutline, pauseCircleOutline } from 'ionicons/icons'; 
import BreaksForm from './BreaksForm';
import WorkHoursForm from './WorkHoursForm';

const PlusActionButton: React.FC = () => {
    return (
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton>
                <IonIcon icon={add} />
            </IonFabButton>

            <IonFabList side="top">
                <ActionItem label="Break" icon={pauseCircleOutline} title="Add Break">
                    <BreaksForm></BreaksForm>
                </ActionItem>
                <ActionItem label="Working Hours" icon={timeOutline} title="Set Work Hours">
                    <WorkHoursForm />
                </ActionItem>
            </IonFabList>
        </IonFab>
    );
};

export default PlusActionButton;
