import React from 'react';
import { IonFab, IonFabButton, IonIcon, IonFabList } from '@ionic/react';
import { pencilOutline } from 'ionicons/icons'; 
import WorkHoursActionItem from './WorkHoursActionItem';

const EditButton: React.FC = () => {
    return (
        <IonFab vertical="bottom" horizontal="start" slot="fixed">
            <IonFabButton>
                <IonIcon icon={pencilOutline} />
            </IonFabButton>

            <IonFabList side="top">
                <WorkHoursActionItem />
            </IonFabList>
        </IonFab>
    );
};

export default EditButton;
